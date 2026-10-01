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
varying vec2 v_uv;

void main() {
  // Multi-tap soft sampling for anti-aliased smoothing
  vec2 texel = vec2(0.00052, 0.00092);
  vec4 c0 = texture2D(u_video, v_uv);
  vec4 c1 = texture2D(u_video, v_uv + vec2(texel.x, 0.0));
  vec4 c2 = texture2D(u_video, v_uv - vec2(texel.x, 0.0));
  vec4 c3 = texture2D(u_video, v_uv + vec2(0.0, texel.y));
  vec4 c4 = texture2D(u_video, v_uv - vec2(0.0, texel.y));
  vec4 tex = c0 * 0.44 + (c1 + c2 + c3 + c4) * 0.14;
  
  // Calculate luminance
  float luma = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
  
  // Cutoff strictly outside the bust
  if (luma <= 0.012) {
    discard;
  }
  
  // Ultra-smooth antialiased silhouette boundary
  float edge = smoothstep(0.012, 0.038, luma);
  
  // Luminous, radiant polished gold grading — lifted shadows for full torso & groove visibility
  vec3 goldDark = vec3(0.22, 0.155, 0.065); // Rich warm bronze-gold shadow base (no crushed blacks)
  vec3 goldMid  = vec3(0.92, 0.76, 0.38);   // Radiant 18k champagne gold midtones
  vec3 goldHi   = vec3(1.0, 0.96, 0.82);   // Luminous 24k specular highlights
  
  float midProg = smoothstep(0.02, 0.50, luma);
  vec3 gold = mix(goldDark, goldMid, midProg);
  gold = mix(gold, goldHi, pow(clamp(luma, 0.0, 1.0), 1.85) * 0.95);
  
  gl_FragColor = vec4(gold * edge, edge);
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

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
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
        // Retry muted
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
      {/* Instant fallback image so the gold bust is never blank on initial load */}
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
