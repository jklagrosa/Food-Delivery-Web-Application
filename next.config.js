/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    dbString:
      "mongodb+srv://devonly:devonly@cluster0.z6mkq.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
