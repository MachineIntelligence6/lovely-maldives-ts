/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'markdown-loader',
          options: {
            // Pass options to marked
            // See https://marked.js.org/using_advanced#options
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig
