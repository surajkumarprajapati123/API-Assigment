# User Registration and Login with JWT Authentication

## Description

This project is a web-based application developed using Node.js and Express. It provides user registration and login functionality with secure JWT authentication. The system allows users to register, log in, and manage their authentication tokens efficiently.

## Features

- **User Authentication:** Users can register, log in, and log out securely with JWT authentication.
- **Secure Password Handling:** Passwords are hashed using `bcrypt` for secure storage.
- **Token-Based Authentication:** JWT tokens are used for authenticating and authorizing users.
- **Environment Configuration:** Configurable environment variables using `dotenv`.

## Additional Features

- **Token Verification Middleware:** Middleware to protect routes by verifying JWT tokens.
- **Error Handling:** Proper handling of authentication errors and responses.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web framework for building the RESTful API.
- **MongoDB:** NoSQL database for storing user data.
- **Mongoose:** ODM for interacting with MongoDB.
- **jsonwebtoken:** Library for generating and verifying JWT tokens.
- **bcrypt:** Library for hashing and verifying passwords.
- **body-parser:** Middleware for parsing request bodies.
- **cookie-parser:** Middleware for parsing cookies.
- **dotenv:** Library for managing environment variables.
- **nodemon:** Tool for auto-reloading the server during development.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/surajkumarprajapati123/API-Assigment
   cd <repository-directory>

   Install Dependencies

## Ensure you have Node.js installed. Install the required dependencies:

npm install

## Running the Application
npm start

## Register a User
Endpoint: POST http://127.0.0.1:3000/user/create

Request Body:
{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}

## Login a User
Endpoint: POST http://127.0.0.1:3000/user/login

Request Body:
{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}

## Use the JWT Token to Access Protected Endpoint

Endpoint: GET http://1227.0.0.1:3000/user/test

URL: http://127.0.0.1:3000/user/test (make sure to use the correct port)

Headers:

Authorization: Bearer jwt_token (replace jwt_token with the token you received from the login response)




