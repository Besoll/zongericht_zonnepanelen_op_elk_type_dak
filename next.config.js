const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    disable: process.env.NODE_ENV === "production",
    cacheOnFrontEndNavCaching: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    workboxOptions: {
        disableDevLogs: true,
      },

  });


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io']
    },
    optimizeFonts: true,
}

module.exports = withPWA(nextConfig)





