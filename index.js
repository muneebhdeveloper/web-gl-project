const express = require("express");

const app = express();
app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("index");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
