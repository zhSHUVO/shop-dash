/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.ibb.co"],
    },
    webpack: (config, { dev }) => {
        if (dev) {
            config.cache = false;
        }
        return config;
    },
};

module.exports = nextConfig;
