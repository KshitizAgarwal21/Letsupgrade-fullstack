var jwt = require("jsonwebtoken");
var mysalt = "mysecretkey";
var routeGuard = (req, res, next) => {
  var decodedToken = jwt.verify(req.body.token, mysalt);

  if (decodedToken) {
    next();
  } else {
    res.status(400).send({ msg: "Unauthorised request" });
  }
};
module.exports = routeGuard;
