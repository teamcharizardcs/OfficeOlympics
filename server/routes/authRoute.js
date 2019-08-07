const authRouter = require('express').Router();

// controllers
const authController = require('../controllers/authController.js');

authRouter.post('/signup', authController.validateUserInput, authController.isSigned,
  authController.signUp, (req, res) => res
    .status(200).json(res.locals));

authRouter.post('/login', authController.validateUserInput, authController.isSigned,
  authController.login, (req, res) => res
    .status(200).json(res.locals));

module.exports = authRouter;
