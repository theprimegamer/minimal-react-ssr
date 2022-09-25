import path from "path";
import { Configuration } from "webpack";
import { sharedConfig } from "./webpack.shared.config";
import nodeExternals from "webpack-node-externals";

const expressconfig: Configuration = {
  ...sharedConfig,
  entry: "./src/server/index.tsx",
  output: {
    filename: "server-bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  externals: [nodeExternals()],
};

const staticConfig: Configuration = {
  ...sharedConfig,
  entry: "./src/server/app-load.tsx",
  output: {
    filename: "app-load.js",
    path: path.resolve(__dirname, "dist", "public"),
  },
};

export default [expressconfig, staticConfig];
