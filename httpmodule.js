var http = require("http");

// app.listen(8080, (err)=>{
//     console/log("server started")
// })

http
  .createServer((req, res) => {
    res.write(
      `<html>
        <head>
          <link rel="icon" href="data:," />
        </head>
        <body>Welcome to the server</body>
      </html>`
    );
    res.end();
    console.log(req.url);
  })
  .listen(8080);
