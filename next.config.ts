import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // vgpu WGSL module loader — required for optimized-black-hole *.wgsl imports
  turbopack: {
    rules: {
      "*.wgsl": {
        loaders: ["@vgpu/wgsl/loader-webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module ??= {};
    config.module.rules ??= [];
    config.module.rules.push({
      test: /\.wgsl$/,
      loader: "@vgpu/wgsl/loader-webpack",
    });
    return config;
  },
  async redirects() {
    return [
      { source: "/works", destination: "/work", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/cases", destination: "/work", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/intake", destination: "/intake/index.html" },
      { source: "/intake/", destination: "/intake/index.html" },
    ];
  },
};

export default nextConfig;
