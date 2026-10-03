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
precision highp float;
uniform sampler2D u_video;
uniform vec2 u_resolution;
varying vec2 v_uv;

void main() {
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  
  // Natural un-distorted framing: Head aligned cleanly at top (y=0.27), chest base at y=1.00
  float scaleY = 0.74;
  float centerY = 0.64;
  float scaleX = scaleY * aspect * (1080.0 / 1920.0);
  float centerX = 0.50;
  
  vec2 uv;
  uv.x = (v_uv.x - 0.5) * scaleX + centerX;
  uv.y = (v_uv.y - 0.5) * scaleY + centerY;
  
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
  
  // 13 Utopia Signature Pure Monochrome Architectural Chrome & Obsidian Palette:
  vec3 obsidianDark   = vec3(0.04, 0.04, 0.04); // Deep shadow void
  vec3 titaniumBody   = vec3(0.22, 0.22, 0.22); // Monochrome titanium midtones
  vec3 titaniumSheen  = vec3(0.65, 0.65, 0.65); // Polished silver wireframe ribs
  vec3 platinumGlint  = vec3(0.92, 0.92, 0.92); // Crisp pure platinum reflection
  vec3 specularWhite  = vec3(1.00, 1.00, 1.00); // Pure crisp white specular gleam
  
  vec3 color = mix(obsidianDark, titaniumBody, smoothstep(0.01, 0.35, luma));
  color = mix(color, titaniumSheen, smoothstep(0.30, 0.72, luma));
  color = mix(color, platinumGlint, smoothstep(0.68, 0.90, luma));
  color = mix(color, specularWhite, pow(clamp(luma, 0.0, 1.0), 3.0));
  
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
  /** `edge` — right-locked, shorter stage for Belief */
  variant?: "default" | "edge";
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: true,
        antialias: true,
      }) ||
      (canvas.getContext("experimental-webgl", {
        alpha: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: true,
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

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      const w = Math.floor((canvas.clientWidth || window.innerWidth * 0.8) * dpr);
      const h = Math.floor((canvas.clientHeight || window.innerHeight * 0.9) * dpr);
      if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);

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
    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      if (video.readyState >= video.HAVE_CURRENT_DATA) {
        updateSize();
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        if (uRes) {
          gl.uniform2f(uRes, canvas.width, canvas.height);
        }

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
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animId);
      } else {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateSize);
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
