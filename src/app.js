const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const ErrorHandler = require('./middleware/ErrorHandler');
const ErrorMessage = require("./utils/ErrorMessage")
const router = require('./routes/index');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);
app.use(ErrorMessage);

module.exports = app;
