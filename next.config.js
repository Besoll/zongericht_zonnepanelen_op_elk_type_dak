const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require("next/constants");
  
  /** @type {import("next").NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.sanity.io']
    },
    optimizeFonts: true
  };
  
  module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
      const withPWA = require("@ducanh2912/next-pwa").default({
        dest: "public",
        disable: process.env.NODE_ENV === "production",
        cacheOnFrontEndNavCaching: true,
        aggressiveFrontEndNavCaching: true,
        reloadOnOnline: true,
        swcMinify: true,
        workboxOptions: {
            disableDevLogs: true,
        }
      });
      return withPWA(nextConfig);
    }
    return nextConfig;
  };