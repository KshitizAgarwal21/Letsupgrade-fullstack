var express = require("express");
var app = express();
var port = 8081;

// app.listen(port, (err) => {
//   console.log("server started successfully");
// });

app.get("/welcome", (req, res) => {
  res.send({ msg: "hello" });
});

async function comebacktomeoncedone() {
  var someoperationthattakestime = await setTimeout(() => {
    console.log("i am called");
  }, 2000);
  console.log("test ");
}
function justtesting() {
  console.log("test successful");
}
comebacktomeoncedone();
justtesting();
