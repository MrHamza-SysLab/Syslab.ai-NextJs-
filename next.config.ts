import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Generate /route/index.html so trailing-slash URLs work on static hosts.
  trailingSlash: true,
  reactCompiler: true,
  images: {
    unoptimized: true, // Required for static export
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
