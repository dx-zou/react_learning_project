const CracoLessPlugin = require('craco-less');
const path = require('path');
// const webpack = require('webpack');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
// const pathResolve = pathUrl => path.join(__dirname, pathUrl);
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
    },
    plugins: [
      // 编译进度条
      new WebpackBar({profile: true}),
      // 循环引用检测
      // new CircularDependencyPlugin({
      // 	exclude: /node_modules/,
      // 	include: /src/,
      // 	failOnError: true,
      // 	allowAsyncCycles: false,
      // 	cwd: process.cwd(),
      // }),
      // 压缩包
      // new CompressionWebpackPlugin({
      // 	algorithm: 'gzip',
      // 	test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
      // 	threshold: 1024,
      // 	minRatio: 0.8,
      // }),
      // 打包分析
      // new BundleAnalyzerPlugin(),
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
