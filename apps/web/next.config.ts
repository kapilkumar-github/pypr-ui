import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pypr-resume-package",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
