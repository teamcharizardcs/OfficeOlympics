const employeesRouter = require('express').Router();

// controllers
const employeesController = require('../controllers/employeesController.js');

employeesRouter.get('/:userId', employeesController.getInfo,
  (req, res) => res.status(200).json(res.locals.data));

module.exports = employeesRouter;
