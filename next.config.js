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

const { withNextVideo } = require('next-video/process');


const nextConfig = {
    images: {
        domains: ['cdn.sanity.io']
    },
}

module.exports = withPWA(nextConfig)
module.exports = withNextVideo(nextConfig);


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['cdn.sanity.io'],
//     },
// };

// module.exports = nextConfig;


