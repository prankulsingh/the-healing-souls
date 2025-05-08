import type { NextConfig } from "next"

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
})

const nextConfig: NextConfig = {
  // Recognize .ts/.tsx, .js/.jsx, .md, and .mdx files as pages
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // (Any other Next.js options you need can go here)
}

export default withMDX(nextConfig)