/** @type {import('next').NextConfig} */
const nextConfig = {
  // setup saat ingin ambil gambar dari luar
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
};

export default nextConfig;
