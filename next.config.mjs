/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/thank-you.html",
        destination: "/thank-you",
      },
    ];
  },
};

export default nextConfig;
