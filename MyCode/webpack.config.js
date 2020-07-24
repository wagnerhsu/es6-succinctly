
const path = require("path");
module.exports = {
    watch: true,
    mode: "production",
    entry: "./src/index.js",
    output: {
      globalObject: "this",
      libraryTarget: "umd",
      library: "default",
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
    ]
  }
}
