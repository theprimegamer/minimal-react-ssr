import path from "path";
import { Configuration } from "webpack";
import { sharedConfig } from "./webpack.shared.config";
import nodeExternals from "webpack-node-externals";

const config: Configuration = {
  ...sharedConfig,
  entry: "./src/server/index.ts",
  output: {
    filename: "server-bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [],
  target: "node",
  externals: [nodeExternals()],
};

export default config;
