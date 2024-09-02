const express = require("express");
const {RegisterUser, LoginUser} = require("../controllers/UserController");
const Auth = require("../middleware/Auth");

const router = express.Router();

router.route("/create").post(RegisterUser);
router.route("/login").post(LoginUser);

// Checking for Authentications
router.get('/test',Auth,(req, res) => {
    res.json({
      message: "Authentication is working",
    });
  });


module.exports = router;
