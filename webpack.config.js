

var webpack = require("webpack");
var path = require("path");
module.exports = {
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loader: "react-hot!babel-loader",
      include: path.join(__dirname, 'app')
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.scss$/,
      loader: "style-loader!css-loader!sass-loader"
    }]
  },
  entry: {
    "./app/js/app.jsx":[
      'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
      'webpack/hot/dev-server', // "only" prevents reload on syntax errors
      "./app/js/app.jsx"
    ]
  },
  output: {
    path: path.join(__dirname, '/app/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx']
  },
  compiler: {
    stats: {
      colors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
