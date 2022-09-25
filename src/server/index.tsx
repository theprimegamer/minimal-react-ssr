import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { App } from "src/common/components/App";
import path from "path";

const app = express();
const port = 3000;

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (_req, res) => {
  const html = `<div id="appRoot">${ReactDOMServer.renderToString(
    <App />
  )}</div><script src="/static/app-load.js"></script>`;

  res.setHeader("Content-type", "text/html");
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
