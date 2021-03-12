const CracoLessPlugin = require('craco-less');
const path = require('path');
// const webpack = require('webpack');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
// const pathResolve = pathUrl => path.join(__dirname, pathUrl);
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
    },
    plugins: [
      // 编译进度条
      new WebpackBar({ profile: true }),
      new MonacoWebpackPlugin([
        'apex',
        'azcli',
        'bat',
        'clojure',
        'coffee',
        'cpp',
        'csharp',
        'csp',
        'css',
        'dockerfile',
        'fsharp',
        'go',
        'handlebars',
        'html',
        'ini',
        'java',
        'javascript',
        'json',
        'less',
        'lua',
        'markdown',
        'msdax',
        'mysql',
        'objective',
        'perl',
        'pgsql',
        'php',
        'postiats',
        'powerquery',
        'powershell',
        'pug',
        'python',
        'r',
        'razor',
        'redis',
        'redshift',
        'ruby',
        'rust',
        'sb',
        'scheme',
        'scss',
        'shell',
        'solidity',
        'sql',
        'st',
        'swift',
        'typescript',
        'vb',
        'xml',
        'yaml',
      ]),
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
