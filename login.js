var express = require("express");
const router = express.Router();

router.post("/login", (req, res, next) => {
  res.status(200).send({ msg: "login successful" });
});
module.exports = router;
