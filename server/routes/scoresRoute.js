const scoresRouter = require('express').Router();

// controllers
const scoresController = require('../controllers/scoresController.js');

scoresRouter.post('/', (req, res) => res
  .status(200).send('Hello, you have reached the scores route.'));

module.exports = scoresRouter;
