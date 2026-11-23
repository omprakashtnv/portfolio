
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/omprakash-portfolio",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
