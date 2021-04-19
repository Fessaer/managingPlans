const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js'
      
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        alwaysWriteToDisk: true}),
        
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ],
    module: {
      
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },

        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ]
        },

      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    
    
    performance: { hints: false },
    devtool: false,
    devServer: {
      historyApiFallback: true,
      hot: true
    }
    
  };