const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  devServer: {
    port: 3003,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
    new ModuleFederationPlugin({
      name: 'mf_shared_ui',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button/index.tsx',
      },
    }),
  ],
}
