const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    }
},
    { timestamps: true }
)

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  });
  UserSchema.methods.comparePassword = async function (password) {
    const ismatch = await bcrypt.compare(password, this.password);
    // console.log("Password is from databse  ", ismatch);
    return ismatch;
  };
  
  UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
      {
        _id: this._id,
     
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  };
  UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
  };
const User = mongoose.model('user',UserSchema)
module.exports = User