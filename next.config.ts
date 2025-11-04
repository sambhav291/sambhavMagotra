import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Turbopack uses the absolute project folder as its root. Using an
  // absolute path avoids the doubled/relative path issue.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
