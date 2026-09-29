"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  vec4 tex = texture2D(u_video, v_uv);
  
  // Calculate luminance
  float luma = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
  
  // Cutoff strictly outside the bust (background video noise is < 0.022)
  if (luma <= 0.022) {
    discard;
  }
  
  // Crisp antialiased boundary on the outer silhouette edge
  float edge = smoothstep(0.022, 0.045, luma);
  
  // Deep metallic gold grading: deep bronze shadow base in the grooves, radiant 24k highlights
  vec3 goldDark = vec3(0.035, 0.022, 0.008);
  vec3 goldMid  = vec3(0.88, 0.70, 0.33);
  vec3 goldHi   = vec3(1.0, 0.94, 0.78);
  
  vec3 gold = mix(goldDark, goldMid, smoothstep(0.045, 0.58, luma));
  gold = mix(gold, goldHi, pow(clamp(luma, 0.0, 1.0), 2.2));
  
  // 100% solid opacity across the bust interior (edge is 1.0 above 0.045)
  gl_FragColor = vec4(gold * edge, edge);
}
`;

export function TransparentBustVideo() {
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
    <div className={styles.wrapper}>
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
