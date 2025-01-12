import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phillip.rs",
      },
    ],
  },
};

export default nextConfig;
