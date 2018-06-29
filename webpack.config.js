const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Settings = require("./settings.json");

const sassLoaders = [
  'css-loader',
  // 'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    app: "./js/App.js",
  },
  output: {
    path: __dirname + "/src/",
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': [{
          'loader': 'babel-loader',
          'options': {
            presets: ['react'],
            // presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-class-properties']
            // plugins: ['react-html-attrs', 'transform-class-properties', 'syntax-dynamic-import']
          }
        }]
      },
      {
        'test': /\.jsx$/,
        'use': [{
          'loader': 'babel-loader'
        }],
        'exclude': /node_modules/
      },
      {
        'test': /\.(sass|scss)$/,
        'exclude': /node_modules/,
        'use': ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: sassLoaders
        })
      }
    ]
  },
  'resolve': {
    modules: [path.join(__dirname, "src"), "node_modules"],
    'alias': {
      'styles': path.resolve(__dirname, './src/sass'),
      'components': path.resolve(__dirname, './src/js'),
      'stores': path.resolve(__dirname, './src/js/stores'),
      'actions': path.resolve(__dirname, './src/js/actions'),
      'shared': path.resolve(__dirname, './src/js/shared')
    },
    'extensions': ['.js', '.json', '.jsx', '.css', 'sass', '.png', '.svg', '.jpg']
  },
  devtool: "inline-source-map",
  'plugins': [
    new ExtractTextPlugin('[name].min.css')
    // new webpack.LoaderOptionsPlugin({
    //   'options': {
    //     'postcss': [
    //       autoprefixer({
    //         'browsers': ['last 3 versions', '> 1%', 'IE >= 11']
    //       })
    //     ]
    //   }
    // })
  ],
  devServer: {
    // historyApiFallback: true
    historyApiFallback: {
      contentBase: path.join(__dirname, "dist")
    }
  },
  externals: {
    'Settings': JSON.stringify(Settings)
  },
};
