import type { NextConfig } from "next";

const GD_DOMAINS = "https://*.gamedistribution.com https://gamedistribution.com";
const GAMEZOP_DOMAINS = "https://*.gamezop.com https://gamezop.com";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              `frame-src 'self' ${GD_DOMAINS} ${GAMEZOP_DOMAINS}; ` +
              `child-src 'self' ${GD_DOMAINS} ${GAMEZOP_DOMAINS}; ` +
              `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${GD_DOMAINS} ${GAMEZOP_DOMAINS}; ` +
              `connect-src 'self' ${GD_DOMAINS} ${GAMEZOP_DOMAINS}; ` +
              `img-src 'self' data: ${GD_DOMAINS} ${GAMEZOP_DOMAINS}; ` +
              `style-src 'self' 'unsafe-inline' ${GD_DOMAINS} ${GAMEZOP_DOMAINS};`
          },
        ],
      },
    ];
  },
};

export default nextConfig;




