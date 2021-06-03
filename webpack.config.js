//entry -> output
const path = require('path')


module.exports= {
    entry: './src/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            }
          },
          {
            test: /\.s?css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          }
        ]
      },
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}