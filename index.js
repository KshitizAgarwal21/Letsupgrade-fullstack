var express = require("express");
var app = express();
app.use(express.json());
var login = require("./login");
var signup = require("./signup");
const mongoose = require("mongoose");
const REGISTER_SCHEMA = require("./REGISTER_SCHEMA");
const dbUrl =
  "mongodb+srv://Kshitiz_Agarwal:FJ9EiIfKDWGb6nzS@cluster0.mkzhm.mongodb.net/Sample";

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server started successfully");
});
mongoose.set("strictQuery", false);
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to database");
    }
  }
);

// app.use("/", login);
// app.use("/test", signup);

app.post("/register", async (req, res) => {
  var user_exists = await REGISTER_SCHEMA.find({});
  console.log(user_exists);
  if (user_exists) {
    res.status(200).send({ msg: "email id already exist is database" });
  } else {
    var user_details = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phoneNo: req.body.phoneNo,
    };
    const user = new REGISTER_SCHEMA(user_details);
    // user.save().then((resp) => {
    //   console.log(resp);
    // });
    const result = await user.save();
    console.log(result);
    if (result) {
      res.status(200).send({ msg: "user added to the database" });
    } else {
      res.status(400).send({ msg: "Some problem occured" });
    }
  }
});
//CRUD

//Create
//Read
