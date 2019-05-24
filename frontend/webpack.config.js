const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  
const {
  BASE_LIB = '',
  SOURCE_ENTRY = '',
  SUFFIX_BUNDLE = '',
  TARGET = '',
  SUFFIX_JS = '',
  SUFFIX_CSS = '',
} = require('./project.config');

console.log(`${SOURCE_ENTRY} hello source`);

module.exports = {
  entry: `${SOURCE_ENTRY}`,
  output: {
    path: path.resolve(__dirname, `../${TARGET}`),
    filename: `${BASE_LIB}${SUFFIX_BUNDLE}${SUFFIX_JS}`,
    publicPath: `${TARGET}`
  },
  module : {
    rules : [
      {
          test: /\.s?[ac]ss$/,
          use: [
              MiniCssExtractPlugin.loader,
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
          ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
	optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
  plugins: [
    new MiniCssExtractPlugin({
        filename: `${BASE_LIB}${SUFFIX_BUNDLE}${SUFFIX_CSS}`
    }) 
  ]
};
