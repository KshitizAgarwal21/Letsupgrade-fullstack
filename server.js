//express is a framework/library that is used to create a server in node js

var express = require("express");
var data = require("./data.json");
const jwt = require("jsonwebtoken");
const validator = require("./middleware/validator");
const routeGuard = require("./middleware/routeGuard");
var app = express();
var mysalt = "mysecretkey";
const cors = require("cors");
app.use(cors());
app.use(express.json());
var port = 8080 || PROCESS.env.PORT;
app.listen(port, (err) => {
  if (err) {
    console.log("server starting failed" + err);
  } else {
    console.log("Server started successfully at port " + port);
  }
});

//get API

app.get("/getDetails", function (req, res) {
  // search the req object in a database containing 1million records

  console.log(req.body);
  res.send({ msg: "hello your search was successful", data: "data" });
});
//callback hell
app.get("/getpersonalDetails", (req, res) => {
  res.send({ name: "Rahul", Phone: 12229922 });
});

// app.post("/login", (req, res) => {
//   var email = req.body.email;
//   var pass = req.body.pass;

//   if (email === "trainer@letsupgrade.in") {
//     if (pass === "HelloWorld") {
//       res.send({ msg: "Login successfull" });
//     } else {
//       res.send({ msg: "Credentials do not match" });
//     }
//   } else {
//     res.send({ msg: "User is not registered. Please signup" });
//   }
// });

app.post("/getFeed", (req, res) => {
  setTimeout(() => {
    console.log("Got data for my feed");
  }, 2000);
});

app.post("/login", validator, (req, res) => {
  //refer to each object and its password and compare with req object

  // data.forEach((elem) => {
  //   if (elem.email === req.body.email) {
  //     checkPass(req.body.email);
  //   }
  // });
  var op = data.filter((elem) => {
    return elem.email === req.body.email;
  });
  console.log(op);
  if (op.length == 0) {
    res.status(200).send({ msg: "Please enter valid emailid" });
  }

  if (op[0].password === req.body.password) {
    var obj = {
      name: "Rahul",
      area: "delhi",
      contact: 3456789,
    };

    res.status(200).send({ msg: "Log in successful" });
  } else {
    res.status(200).send({ msg: "Invalid credentials" });
  }
  // if (flag == 0) {
  //   res.status(200).send({ msg: "Please enter valid emailid" });
  // }
  // function checkPass(email) {
  //   data.forEach((elem) => {
  //     if (elem.email === email) {
  //       if (elem.password === req.body.password) {
  //         res.status(200).send({ msg: "Log in successful" });
  //       } else {
  //         res.status(200).send({ msg: "Invalid credentials" });
  //       }
  //     }
  //   });
  // }

  // if (req.body.email === data.email) {
  //   if (req.body.password === data.password) {
  //     res.status(200).send({ msg: "Log in successful" });
  //   } else {
  //     res.status(200).send({ msg: "Invalid credentials" });
  //   }
  // } else {
  //   res.status(200).send({ msg: "User not registered" });
  // }
});

app.post("/signup", validator, (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var passwd = req.body.passwd;
  //if op was successful
  res.status(200).send({ msg: "data stored successfully" });
  // if any problem
  res.status(200).send({ msg: "error occured" });
});
//jwt ->json web token

// from backend you need to send some sensitive data to frontend
//for eg -> contact number, account number, profile picture

app.post("/getAccountBalance", routeGuard, (req, res) => {
  console.log(decodedToken);
});

//Middleware -> a middleware is simply a function that sits in the middle of incoming http request and outgoing http request
//RouteGuard -> a middleware to guard the apis from anauthorised request from the frontend.
