//Built in node library
var path = require('path');
var webpack = require('webpack');

const config = {
  //Hey look over here for everything thats gonna stem out from here
  //My application will actually live in app.js but
  entry: './entry.jsx',
  //All that stuff that's outputted, it's going to all bundle into this bundle.js
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    //PS: Can you babble-fy all this over here, too?
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};

module.exports = config;