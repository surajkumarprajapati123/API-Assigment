const User = require("../models/UserModel");
const ErrorMessage = require("../utils/ErrorMessage");
const { registerSchema ,loginSchema} = require("../validate/UserValidation");
const bcrypt = require('bcrypt')

const registerUser = async (userdata) => {
  const { email, password, username } = userdata;

  // Validate user data
  const { error,value } = registerSchema.validate(userdata);
  if (error) {
    throw new ErrorMessage(error.details[0].message, true, 400);
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ErrorMessage("Email already in use", true, 400);
    }

    // Create a new user
    const user = await User.create(value);

    return user;
  } catch (error) {
    // Log the error and throw a new error message
    console.error("Error creating user:", error);
    throw new ErrorMessage("Error creating user", false, 500, error.stack);
  }
};


const loginUser = async (userdata) => {
  try {
    // Find the user by email
    const {email,password} = userdata

    const {error,value} = loginSchema.validate(userdata)
    const user = await User.findOne({ email });
    if (!user) {
      throw new ErrorMessage("Invalid email or password", true, 401);
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ErrorMessage("Invalid email or password", true, 401);
    }

  
    return user
  } catch (error) {
    console.error("Error logging in user:", error);
    throw new ErrorMessage("Error logging in user", false, 500, error.stack);
  }
};

module.exports = { registerUser,loginUser };
