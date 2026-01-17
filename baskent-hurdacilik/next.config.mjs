const isGithubPages = process.env.GITHUB_PAGES === "true";

const csp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https://images.unsplash.com https://source.unsplash.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.google.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "font-src 'self' data:",
  "frame-src 'self' https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // GitHub Pages için statik export
  output: "export",
  trailingSlash: true,


  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },

  // GitHub Pages'te custom headers çalışmaz → sadece local/normal host için bırak
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: securityHeaders,
            },
          ];
        },
      }),
};

export default nextConfig;
