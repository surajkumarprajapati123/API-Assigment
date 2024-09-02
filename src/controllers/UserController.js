const CatchAsync = require("../utils/CatchAsync")
const ApiResponse = require("../utils/ApiResponse")
const { registerUser, loginUser } = require("../service/UserService")
const GenerateAccesssTokenandRefreshToken = require("../utils/generateToken")


const RegisterUser = CatchAsync(async(req,res)=>
{
    
    const user = await registerUser(req.body)
    ApiResponse(res,201,"User is Created SuccessFully",user)
})

const LoginUser = CatchAsync(async(req,res)=>
{
    
    const user = await loginUser(req.body)
    const { AccessToken, RefreshToken } =
    await GenerateAccesssTokenandRefreshToken(user._id);

  res
    .status(200)
    // Set cookies for AccessToken and RefreshToken
    .cookie("AccessToken", AccessToken)
    .cookie("RefreshToken", RefreshToken)
    .json({
      message: "User logged in successfully",
      success: true,
      tokens: {
        access: {
          AccessToken,
        },
        refresh: {
          RefreshToken,
        },
      },
    });
    ApiResponse(res,201,"User is Login SuccessFully",user)
})

module.exports = {RegisterUser,LoginUser}