import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the `out/` directory deploys to any static host (HestiaCP, Vercel, S3…).
  output: "export",
  // Directory-style URLs so plain static servers resolve /about -> about/index.html cleanly.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
