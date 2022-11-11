const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Yay Node!");
});

app.get("/node", function (req, res) {
  res.send("This is the node route");
});

app.get("/node/codeyourfuture", function (req, res) {
  res.send("This is the Code Your Future route");
});

app.listen(20000, function () {
  console.log("Server is listening on port 20000. Ready to accept requests!");
});
