import type { NextConfig } from "next";

const repoSubpath = "/ayushparashar.github.io";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoSubpath,
  assetPrefix: repoSubpath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
