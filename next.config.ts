import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Porfolio-Fariha",
  assetPrefix: "/Porfolio-Fariha/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;