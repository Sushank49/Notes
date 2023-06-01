const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.set("view engine", "pug");
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  params = {
    hi: "Hello topi",
  };
  res.status(200).render("index.pug", params);
});
app.post("/", (req, res, next) => {
  console.log("Pakehhe");
  console.log(req.body);
});

app.listen(port, () => {
  console.log("Connected on http://127.0.0.1:8000");
});
