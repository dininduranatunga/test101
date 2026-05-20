

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/test101" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
