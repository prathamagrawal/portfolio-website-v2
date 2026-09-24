import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/pratham-manish-agrawal",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/prathamagrawal",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/fearsomejockey",
        permanent: false,
      },
      {
        source: "/kaggle",
        destination: "https://www.kaggle.com/fearsomejockey",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/prathamonthemove/",
        permanent: false,
      },
      {
        source: "/email",
        destination: "mailto:prathamagrawal1205@gmail.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
