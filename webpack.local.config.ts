import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
import { sharedConfig } from "./webpack.shared.config";

const config: Configuration = {
  ...sharedConfig,
  entry: "./src/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "client", "index.html"),
    }),
  ],
};

export default config;
