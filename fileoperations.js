var express = require("express");
var app = express();
var fs = require("fs");
app.listen(8080, (err) => {
  console.log("server started successfully");
});

fs.readFile("myfile.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

fs.writeFile("myfile.txt", "added content using fs writeFile", (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("updated file contents");
  }
});

fs.appendFile("myfile.txt", "my text to be appended", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("appended successfully");
  }
});

fs.open("myfile.txt", "w", (err, file) => {
  if (err) {
    console.log(err);
  }
});
