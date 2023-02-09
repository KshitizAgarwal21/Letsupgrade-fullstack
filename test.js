//callback -> A function that is passed as an argument inside another function

// console.log("I am called first");

// setTimeout(function () {
//   console.log("Im executed now");
// }, 3000);

// console.log("I am called second");

//callback is used to help with non blocking

var n = 12;
var myPromise = new Promise((resolve, reject) => {
  if (n > 10) {
    resolve("success");
  } else {
    reject("failed");
  }
});

// fetch("url")
//   .then((res) => {
//     res.json();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Javascript is a synchronous single threaded language
//synchronous -> perform one task at a time
//how to achieve asynchronous behaviour ->
//1) Callbacks
//2) Promises
//3) Async Await
//Purpose of using promise is to achieve asynchronous behaviour.
