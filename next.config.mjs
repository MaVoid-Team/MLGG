/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/MLGG",
  assetPrefix: "/MLGG/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
