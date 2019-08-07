const gamesRouter = require('express').Router();

// controllers
const gamesController = require('../controllers/gamesController.js');

gamesRouter.get('/', (req, res) => res
  .status(200).send('Hello, you have reached the games route.'));

gamesRouter.get('/:officeId', gamesController.getGames,
  (req, res) => res.status(200).json(res.locals.games));

gamesRouter.post('/:officeId/:gameName/:userId', gamesController.newGame,
  (req, res) => res.status(200).json(res.locals.data));

module.exports = gamesRouter;
