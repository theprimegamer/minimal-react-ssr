import { Configuration } from "webpack";
import { sharedConfig } from "./webpack.shared.config";

const config: Configuration = {
  ...sharedConfig,
};

export default config;
