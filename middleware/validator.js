var validator = (req, res, next) => {
  var emailid = req.body.email;
  var regexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailid.match(regexp)) {
    next();
  } else {
    res.status(400).send({ msg: "Unauthorised email" });
  }
};

module.exports = validator;
