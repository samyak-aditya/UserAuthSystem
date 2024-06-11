# UserAuthSystem

## Description
UserAuthSystem is a basic implementation of a user authentication system built with Node.js and Express. It provides functionalities for user registration, login, and secure password management using bcrypt.

## Features
- User Registration: Create new user accounts with a username and password.
- User Login: Authenticate users with a username and password.
- Password Hashing: Securely store passwords using bcrypt.
- Session Management: Maintain user sessions to keep users logged in.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/samyak-aditya/hlLH5PbflVp2n7NL.git
    cd hlLH5PbflVp2n7NL
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

## Usage
1. Open your web browser and navigate to `http://localhost:3000`.
2. Register a new account.
3. Log in with your newly created account.

## Project Structure
```plaintext
|-- public
|   |-- css
|   |   |-- styles.css
|   |-- js
|   |   |-- scripts.js
|
|-- src
|   |-- controllers
|   |   |-- authController.js
|   |-- models
|   |   |-- userModel.js
|   |-- routes
|   |   |-- authRoutes.js
|   |-- views
|   |   |-- login.ejs
|   |   |-- register.ejs
|   |-- app.js
|
|-- .gitignore
|-- package-lock.json
|-- package.json
