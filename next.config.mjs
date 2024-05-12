/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/stock",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
