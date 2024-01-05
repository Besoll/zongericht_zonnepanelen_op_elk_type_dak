const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
    },
    optimizeFonts: true,
    // Other configurations...
};

module.exports = withPWA({
    ...nextConfig,
    pwa: {
        dest: 'public', // This will output the service worker to your public directory.
        // You can add more configurations for PWA here.
        // For example, to disable PWA in development mode:
        // disable: process.env.NODE_ENV === 'development',
    },
});



