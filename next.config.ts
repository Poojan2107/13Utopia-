import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
