/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io']
    },
    reactStrictMode: true,
    experimental: { optimizeCss: true }
    
}

module.exports = nextConfig


