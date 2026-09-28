import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/intake", destination: "/intake/index.html" },
      { source: "/intake/", destination: "/intake/index.html" },
    ];
  },
};

export default nextConfig;
