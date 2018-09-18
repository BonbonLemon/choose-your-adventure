var path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

module.exports = {
  context: __dirname,
  entry: "./frontend/choose_your_adventure.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  // process: {env: {
  //   'NODE_ENV': 'production'
  // }},
  // optimization: {
     // minimizer: [
       // new webpack.optimize.minimize({
       //   uglifyOptions: {
       //     // beautify: false,
       //     compress: true,
       //     // comments: false,
       //     // mangle: false,
       //     // toplevel: false,
       //     // keep_classnames: true, // <-- doesn't exist, I guess. It's in harmony branch
       //     // keep_fnames: true //
       //   }
       // })
     // ]
   // },
   // mode: 'production',
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};