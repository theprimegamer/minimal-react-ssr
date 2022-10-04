import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "src/components/App";
import "src/styles/styles.css";

ReactDOM.hydrateRoot(document.getElementById("appRoot"), <App />);
