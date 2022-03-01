/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: "https://hn.algolia.com/api/v1/search_by_date?query=",
    },
};

module.exports = nextConfig;