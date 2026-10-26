"use client";

import React, { useEffect, useRef, useState } from "react";

const VS = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 0.5 - a_position.y * 0.5);
}
`;

const FS = `
precision mediump float;
uniform sampler2D u_video;
uniform vec2 u_resolution;
uniform vec2 u_parallax;
varying vec2 v_uv;

void main() {
  // Fit video to cover container maintaining 16:9 aspect ratio
  float canvasAspect = u_resolution.x / max(u_resolution.y, 1.0);
  float videoAspect = 1920.0 / 1080.0;
  
  vec2 uv = v_uv;
  if (canvasAspect > videoAspect) {
    float s = canvasAspect / videoAspect;
    uv.y = (uv.y - 0.5) * s + 0.5;
  } else {
    float s = videoAspect / canvasAspect;
    uv.x = (uv.x - 0.5) * s + 0.5;
  }
  
  // Subtle interactive parallax offset
  uv += u_parallax;
  
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    discard;
  }
  
  vec4 tex = texture2D(u_video, uv);
  
  // Calculate source luminance
  float luma = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
  
  // Detect atmospheric blue limb (Rayleigh scattering along horizon)
  float blueLimb = max(0.0, tex.b - max(tex.r, tex.g * 0.72));
  
  // Total presence of Earth surface or atmospheric rim
  float presence = max(luma, blueLimb * 2.2);
  
  // Crisp cutoff for static space background and video compression noise.
  // Smoothstep retains the soft, ethereal cyan/blue atmospheric glow.
  float alpha = smoothstep(0.024, 0.065, presence);
  
  if (alpha <= 0.001) {
    discard;
  }
  
  // Soft feather at extreme top and bottom edges of the section
  float edgeFade = smoothstep(0.0, 0.08, v_uv.y) * smoothstep(1.0, 0.92, v_uv.y);
  alpha *= edgeFade;
  
  gl_FragColor = vec4(tex.rgb * alpha, alpha);
}
`;

interface TransparentEarthVideoProps {
  parallaxX?: number;
  parallaxY?: number;
  className?: string;
}

export function TransparentEarthVideo({
  parallaxX = 0,
  parallaxY = 0,
  className,
}: TransparentEarthVideoProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  // Smooth interpolated parallax values
  const currentParallax = useRef({ x: 0, y: 0 });
  const targetParallax = useRef({ x: 0, y: 0 });

  useEffect(() => {
    targetParallax.current.x = parallaxX * 0.0015;
    targetParallax.current.y = parallaxY * 0.0015;
  }, [parallaxX, parallaxY]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!wrapper || !canvas || !video) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        antialias: false,
        powerPreference: "high-performance",
      }) ||
      (canvas.getContext("experimental-webgl", {
        alpha: true,
        premultipliedAlpha: true,
      }) as WebGLRenderingContext | null);

    if (!gl) {
      setWebGlSupported(false);
      return;
    }

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vs = createShader(gl.VERTEX_SHADER, VS);
    const fs = createShader(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) {
      setWebGlSupported(false);
      return;
    }

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setWebGlSupported(false);
      return;
    }
    gl.useProgram(prog);

    const quad = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uParallax = gl.getUniformLocation(prog, "u_parallax");

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const isMobile = window.innerWidth < 768;
    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.35);
      const w = Math.floor((wrapper.clientWidth || window.innerWidth) * dpr);
      const h = Math.floor((wrapper.clientHeight || window.innerHeight) * dpr);
      if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });

    const playVideo = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    video.addEventListener("canplay", playVideo);
    playVideo();

    let animId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (!isVisible) {
          video.pause();
        } else {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(wrapper);

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Smooth parallax damping
      currentParallax.current.x += (targetParallax.current.x - currentParallax.current.x) * 0.08;
      currentParallax.current.y += (targetParallax.current.y - currentParallax.current.y) * 0.08;

      if (video.readyState >= video.HAVE_CURRENT_DATA) {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
        if (uParallax) {
          gl.uniform2f(
            uParallax,
            currentParallax.current.x,
            currentParallax.current.y
          );
        }

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          video
        );

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateSize);
      observer.disconnect();
      video.removeEventListener("canplay", playVideo);
      gl.deleteBuffer(buf);
      gl.deleteTexture(texture);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
      aria-hidden="true"
    >
      {/* Hidden source video element feeding the WebGL canvas texture */}
      <video
        ref={videoRef}
        src="/videos/earth-orbit.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={
          webGlSupported
            ? { display: "none" }
            : {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                mixBlendMode: "screen",
                filter: "contrast(1.2) brightness(0.9)",
              }
        }
      >
        <source
          src="/sites/edolus/videos/Space-compressNOAUDIO-YTfullHD.mp4"
          type="video/mp4"
        />
      </video>

      {/* Hardware-accelerated transparent WebGL canvas displaying only the Earth */}
      {webGlSupported && (
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
