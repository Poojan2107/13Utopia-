"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home/TransparentBustVideo.module.css";

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
uniform vec2 u_mouse;
uniform float u_time;
varying vec2 v_uv;

void main() {
  float canvasAspect = u_resolution.x / max(u_resolution.y, 1.0);
  float videoAspect = 2400.0 / 1792.0; // Exact source aspect ratio (1.339286)
  
  // Height coverage: spans 0.78 of the 1792px video height, with center at y=0.64
  float scaleY = 0.78;
  float centerY = 0.64;
  
  // Exact width scale to center bust with zero shoulder clipping
  float scaleX = scaleY * (canvasAspect / videoAspect);
  float centerX = 0.486;
  
  // 3D Anatomical Neck-to-Head Yaw:
  float headWeight = smoothstep(0.92, 0.32, v_uv.y);
  vec2 headTurn = u_mouse * vec2(0.045, -0.035) * headWeight;
  
  vec2 uv;
  uv.x = (v_uv.x - 0.5) * scaleX + centerX - headTurn.x;
  uv.y = (v_uv.y - 0.5) * scaleY + centerY - headTurn.y;
  
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    discard;
  }
  
  vec4 tex = texture2D(u_video, uv);
  
  // Calculate luminance from source
  float luma = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
  
  // Clean cutoff for black background
  if (luma <= 0.008) {
    discard;
  }
  
  // Crisp anti-aliased edge mask at the dark contour
  float alpha = smoothstep(0.008, 0.035, luma);
  
  // 13 Utopia Pure Monochrome Architectural Chrome & Obsidian Palette:
  vec3 obsidianDark   = vec3(0.04, 0.04, 0.04);
  vec3 titaniumBody   = vec3(0.22, 0.22, 0.22);
  vec3 titaniumSheen  = vec3(0.65, 0.65, 0.65);
  vec3 platinumGlint  = vec3(0.92, 0.92, 0.92);
  vec3 specularWhite  = vec3(1.00, 1.00, 1.00);
  
  vec3 color = mix(obsidianDark, titaniumBody, smoothstep(0.01, 0.35, luma));
  color = mix(color, titaniumSheen, smoothstep(0.30, 0.72, luma));
  color = mix(color, platinumGlint, smoothstep(0.68, 0.90, luma));
  color = mix(color, specularWhite, pow(clamp(luma, 0.0, 1.0), 3.0));
  
  // Dynamic gaze gleam that tracks where the face is looking
  vec2 gazeOrigin = vec2(0.5, 0.40) + u_mouse * vec2(0.38, -0.28);
  float gazeDist = length(v_uv - gazeOrigin);
  float gazeGlint = exp(-gazeDist * 2.4) * 0.40;
  color += specularWhite * gazeGlint * smoothstep(0.22, 0.85, luma);
  
  // Modulate with micro-detail texture highlights
  color *= (tex.rgb / max(luma, 0.001)) * 0.04 + 0.96;
  
  gl_FragColor = vec4(color * alpha, alpha);
}
`;

export function TransparentBustVideo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "edge";
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video || !wrapper) return;

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

    if (!gl) return;

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
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
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
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uTime = gl.getUniformLocation(prog, "u_time");

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const isMobile = window.innerWidth < 768;
    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.35);
      const w = Math.floor((canvas.clientWidth || window.innerWidth) * dpr);
      const h = Math.floor((canvas.clientHeight || window.innerHeight) * dpr);
      if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });

    // Mouse & Touch tracking for 3D reactive head turning
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    const startTime = performance.now();

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2.0 - 1.0;
      targetMouseY = -(e.clientY / window.innerHeight) * 2.0 + 1.0;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2.0 - 1.0;
        targetMouseY = -(e.touches[0].clientY / window.innerHeight) * 2.0 + 1.0;
      }
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const playVideo = () => {
      video.muted = true;
      video.play().then(() => {
        setVideoPlaying(true);
      }).catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    };

    video.addEventListener("canplay", playVideo);
    video.addEventListener("playing", () => setVideoPlaying(true));
    playVideo();

    let animId: number;
    let isVisible = true;
    let isTabActive = true;

    // IntersectionObserver to pause video & WebGL rendering when scrolled offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (!isVisible) {
          video.pause();
        } else if (isTabActive) {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(wrapper);

    const render = () => {
      if (!isVisible || !isTabActive) {
        animId = requestAnimationFrame(render);
        return;
      }

      const elapsed = (performance.now() - startTime) * 0.001;
      const idleRot = Math.sin(elapsed * 0.6) * 0.04;
      const idleFloatY = Math.sin(elapsed * 0.8) * 0.03;

      mouseX += (targetMouseX - mouseX) * 0.055;
      mouseY += (targetMouseY - mouseY) * 0.055;

      const tiltY = mouseX * 22.0 + idleRot * 10.0;
      const tiltX = -mouseY * 16.0;
      const transX = mouseX * 36.0;
      const transY = -mouseY * 24.0 + idleFloatY * 80.0;

      canvas.style.transform = `perspective(1100px) rotateY(${tiltY.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg) translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0)`;

      if (video.readyState >= video.HAVE_CURRENT_DATA) {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
        if (uMouse) gl.uniform2f(uMouse, mouseX, mouseY);
        if (uTime) gl.uniform1f(uTime, elapsed);

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          video,
        );

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const onVis = () => {
      isTabActive = !document.hidden;
      if (!isTabActive) {
        video.pause();
      } else if (isVisible) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("visibilitychange", onVis);
      video.removeEventListener("canplay", playVideo);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={[
        styles.wrapper,
        variant === "edge" ? styles.wrapperEdge : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src="/metal-human/metal-human.jpg"
        alt=""
        aria-hidden="true"
        className={`${styles.fallbackImage} ${videoPlaying ? styles.fadeOut : ""}`}
      />
      <video
        ref={videoRef}
        src="/metal-human/metal-human.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={styles.hiddenVideo}
      />
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
    </div>
  );
}
