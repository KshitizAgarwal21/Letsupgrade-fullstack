var express = require("express");
var app = express();
var login = require("./login");
var signup = require("./signup");
const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://Kshitiz_Agarwal:<password>@cluster0.mkzhm.mongodb.net/test";

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server started successfully");
});
mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database");
  }
});

app.use("/", login);
app.use("/test", signup);
