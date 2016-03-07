module.exports = {
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,loader: "babel-loader",query: {presets: ['react', 'es2015']}
    },{
      test: /\.css$/,loader: "style-loader!css-loader"
    },{
      test: /\.scss$/,loader: "style-loader!css-loader!sass-loader"
    }]
  },
  entry: "./app/js/app.jsx",
  output: {
    path:"./app/js",
    filename: 'bundle.js'
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx']
  }
};
