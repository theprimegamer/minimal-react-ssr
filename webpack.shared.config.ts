import path from "path";
import { Configuration } from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

export const sharedConfig: Configuration = {
  mode: "development",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js"],
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
  devtool: "source-map",
};
