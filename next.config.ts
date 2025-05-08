import type { NextConfig } from "next"
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
})

const nextConfig: NextConfig = {
  // Recognize .ts/.tsx, .js/.jsx, .md, and .mdx files as pages
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // Tell Next.js to output a fully static site
  output: "export",

  // disable all built-in image optimization
  images: {
    unoptimized: true,
  },

  // If you have asset prefixes or base paths (e.g. deploying to USERNAME.github.io/repo),
  // set `basePath` and/or `assetPrefix` here too.
  // basePath: "/my-nextjs-site",
  // assetPrefix: "/my-nextjs-site",
}

export default withMDX(nextConfig)
