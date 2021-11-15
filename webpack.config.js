const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, 'src');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: path.join(sourcePath, 'index'),
  mode: 'development',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [sourcePath, 'node_modules'],
  },
  module: {
    rules: [
      {
        include: [sourcePath],
        test: /\.(j|t)sx?$/,
        use: ['babel-loader'],
      },
      {
        include: [sourcePath],
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                exportLocalsConvention: 'dashes',
                localIdentName: '[path][name]__[local]',
              },
            },
          },
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        use: ['file-loader?name=img/[name].[ext]'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: `${sourcePath}/images/favicon.ico`,
      template: path.join(__dirname, '/index.html'),
    }),
  ],
  devServer: {
    compress: true,
    port: 3000,
    static: path.join(__dirname, 'dist'),
  },
};
