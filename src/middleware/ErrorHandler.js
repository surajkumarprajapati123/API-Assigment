const ErrorMessage = require("../utils/ErrorMessage");

module.exports = (err, req, res, next) => {
  // Default error status and message
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server Error";

  // Handle MongoDB CastError (invalid ID)
  if (err.name === "CastError") {
    const message = `Resource not found with this ID. Invalid ${err.path}`;
    err = new ErrorMessage(message, true, 400);
  }

  // Handle MongoDB duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    err = new ErrorMessage(message, true, 400);
  }

  // Handle JWT errors
  if (err.name === "JsonWebTokenError") {
    const message = `Invalid token. Please try again later.`;
    err = new ErrorMessage(message, true, 400);
  }

  if (err.name === "TokenExpiredError") {
    const message = `Token expired. Please try again later.`;
    err = new ErrorMessage(message, true, 400);
  }

  // Handle custom ErrorMessage
  if (err instanceof ErrorMessage) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  } else {
    // For all other errors, send a generic message
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  }
};
