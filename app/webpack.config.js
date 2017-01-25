let webpack = require('webpack');
let path = require('path');
let options = {
  libraryName:'antd',
  style:true,
}

module.exports = {
  entry:'./main.js',
  output: {path: __dirname, filename:'bundle.js'},
  module:{
    loaders:[{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets:['es2015','react'],
        plugins: [['import',options]] 

      },
    },
      {
        test: /.less?$/,
        loader: `style-loader!css-loader!less-loader`
      }]     
  }
}
