const statsRouter = require('express').Router();

const statsController = require('../controllers/statsController.js');

statsRouter.get('/:officeId/:gameName', statsController.getLeaderBoard,
  (req, res) => res.status(200).json(res.locals.leaderboard));

// NOT WORKING
// statsRouter.post('/:gameId/:userId/', statsController.moveUser,
//   (req, res) => res.status(200));

module.exports = statsRouter;
