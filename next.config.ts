import type { NextConfig } from "next";

const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

const nextConfig: NextConfig = {};
export default  withVercelToolbar(nextConfig);
