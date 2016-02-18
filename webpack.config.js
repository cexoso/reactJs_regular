module.exports = {
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: "babel-loader",
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  entry: "./app/js/app.jsx",
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx']
  }
};
