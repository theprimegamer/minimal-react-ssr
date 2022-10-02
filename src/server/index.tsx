import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import path from "path";
import { AppContainer } from "src/components/AppContainer";

const app = express();
const port = 3000;

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (_req, res) => {
  const stream = ReactDOMServer.renderToPipeableStream(<AppContainer />, {
    bootstrapScripts: ["/static/app-load.js"],
    onShellReady: () => {
      stream.pipe(res);
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
