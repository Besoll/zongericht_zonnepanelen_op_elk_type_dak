const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        // Additional PWA configurations can be added here
        // For example, to disable PWA in development mode:
        // disable: process.env.NODE_ENV === 'development',
    },
    images: {
        domains: ['cdn.sanity.io'],
    },
    optimizeFonts: true,
    // Other Next.js configurations...
});

