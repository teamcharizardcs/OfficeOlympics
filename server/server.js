require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const port = process.env.PORT;

const app = express();
// routes
const authRouter = require('./routes/authRoute.js');
const gamesRouter = require('./routes/gamesRoute.js');
const employeesRouter = require('./routes/employeesRoute.js');
const statsRouter = require('./routes/statsRoute.js');

// handle parsing
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, '../build')));

app.use('/api/auth', authRouter);
app.use('/api/games', gamesRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/stats', statsRouter);
// app.get('/dashboard', (req, res) => res
//   .status(200).sendFile(path.join(__dirname, '../index.html')));

// catch-all for unknown routes
app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, (err) => {
  if (err) console.error('error when connecting to port', err);
  else console.log('connected on port', port);
});
