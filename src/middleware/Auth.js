
const jwt = require("jsonwebtoken");

const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorMessage");

const Auth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.AccessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ErrorHandler("Unauthorized request", 401);
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password"
    );

    if (!user) {
      throw new ErrorHandler("Invalid Access Token", 401);
    }

    req.user = user;
    

    next();
  } catch (error) {

   
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = Auth;
