import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withBundleAnalyzer(withMDX(nextConfig));
