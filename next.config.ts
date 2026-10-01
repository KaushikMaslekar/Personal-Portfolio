import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kaushik_maslekar_resume.pdf",
        destination: "/kaushik-maslekar-resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
