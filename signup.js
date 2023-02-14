var express = require("express");

const router = express.Router();

router.get("/signup", (req, res, next) => {
  res.send("This is the signup api");
});

module.exports = router;
