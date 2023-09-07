/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.startech.com.bd", "i.ibb.co", "m.media-amazon.com"],
    },
    webpack: (config, { dev }) => {
        if (dev) {
            config.cache = false;
        }
        return config;
    },
};

module.exports = nextConfig;
