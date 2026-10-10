/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next.js 16 requires an explicit qualities allowlist. 75 is the default.
    qualities: [75],
    // Allow the two illustrative image providers used by data/images.js.
    // `search` is intentionally omitted, which permits the providers' query
    // strings (e.g. ?auto=compress&cs=tinysrgb&w=1600).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
