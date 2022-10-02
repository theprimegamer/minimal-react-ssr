import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { AppContainer } from "src/components/AppContainer";
import path from "path";

const app = express();
const port = 3000;

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (_req, res) => {
  const stream = ReactDOMServer.renderToPipeableStream(
    <AppContainer></AppContainer>,
    {
      onShellReady: () => {
        stream.pipe(res);
      },
      bootstrapScripts: ["static/app-load.js"],
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
