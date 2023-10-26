/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  webpack: (config, { isServer }) => {
    // eslint-disable-next-line space-before-blocks
    if (isServer) {
      config.externals = nodeExternals();
    }

    return config;
  },
};
module.exports = {
  images: {
    domains: ["https://www.freepik.com/"],
  },
};
module.exports = nextConfig;
