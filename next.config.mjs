import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Handle CSS extraction properly
    if (!dev && !isServer) {
      
      // Find and replace the existing CSS rule
      const cssRule = config.module.rules.find(rule => 
        rule.test && rule.test.toString().includes('css')
      );
      
      if (cssRule) {
        cssRule.use = cssRule.use.map(loader => {
          if (typeof loader === 'string' && loader.includes('style-loader')) {
            return MiniCssExtractPlugin.loader;
          }
          return loader;
        });
      }
      
      // Add the MiniCssExtractPlugin to plugins
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[id].[contenthash].css',
        })
      );
    }
    
    return config;
  },
};

export default nextConfig;
