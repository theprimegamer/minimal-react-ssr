import * as path from "path";
import { Configuration } from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const sharedConfig: Configuration = {
  mode: "development",
  entry: "./src/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$|\.tsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "client", "index.html"),
    }),
  ],
};
