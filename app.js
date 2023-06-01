const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const MONGODB_URI =
  "mongodb+srv://Notes:<notes.database>@cluster0.6dirlgp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    store: store,
    // ... other options
  })
);

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

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
app.post("/login", (req, res, next) => {
  console.log("Pakehhe");
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log("Connected on http://127.0.0.1:8000");
});
