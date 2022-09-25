import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello World with restart!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
