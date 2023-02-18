var bcrypt = require("bcrypt");
const { application } = require("express");
var password = "abcd";
var saltrounds = 3;
bcrypt.hash(password, saltrounds).then((res) => {
  console.log(res);
});

var reqpass = "abcd";

bcrypt
  .compare(
    reqpass,
    "$2b$10$pV0JvDz6HWp1r9ISJArmCO.Eypz8AShirOPnIyOeIsUi3vOKXRmla"
  )
  .then((resp) => {
    console.log(resp);
  });
