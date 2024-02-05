/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
  },
  images: {
    domains: [
      "www.pngkey.com",
      "www.toyota.astra.co.id",
      "auto2000.co.id",
      "assets.mitsubishi-motors.co.id",
      "promomobiltoyotaresmi.com",
    ],
  },
};

export default nextConfig;
