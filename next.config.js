const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io']
    },
    optimizeFonts: true,
}


module.exports = withPWA({
    ...nextConfig,
    pwa: {
        dest: 'public', // destination of the service worker
        // other PWA-specific configurations...
    },
});
