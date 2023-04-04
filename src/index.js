const express = require("express"); //library
const morgan = require("morgan"); //library
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//  HTTP logger
app.use(morgan("combined"));

//  Template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/login", (req, res) => {
  res.render("Login");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//static file
app.use(express.static(path.join(__dirname, "public")));
