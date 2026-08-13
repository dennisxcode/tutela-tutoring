// `next dev` compiles modules through eval() for hot reloading, so a CSP without
// 'unsafe-eval' stops the dev bundle dead: React never hydrates and nothing
// interactive works on localhost — no language toggle, no FAQ accordion, no
// mobile menu — while the production build, which contains no eval, is fine.
// Dev gets the escape hatch; production keeps the strict policy.
const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-XSS-Protection", value: "0" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // va.vercel-scripts.com serves @vercel/analytics. Without it the
              // CSP blocked the script outright, so the Analytics component in
              // the layout has never actually recorded anything.
              `script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com${isDev ? " 'unsafe-eval'" : ""}`,
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "img-src 'self' data:",
              "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};
export default nextConfig;
