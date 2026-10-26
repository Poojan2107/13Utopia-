import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["playcanvas"],
  // Allow Cursor browser / local tooling on 127.0.0.1 to load /_next assets
  allowedDevOrigins: ["127.0.0.1", "localhost"],
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
      // underscore typo → real demo path
      {
        source: "/sites/thirteen_orbit",
        destination: "/sites/thirteen-orbit/index.html",
        permanent: false,
      },
      {
        source: "/sites/thirteen_orbit/:path*",
        destination: "/sites/thirteen-orbit/:path*",
        permanent: false,
      },
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
