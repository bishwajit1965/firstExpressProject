const express = require("express");
const phones = require("phones");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express! This is the first project. How are you?");
});

app.listen(port, () => {
  console.log(`This app is listening on port: ${port}`);
});
