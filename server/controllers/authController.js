const bcrypt = require('bcrypt');
const pool = require('../db/db');
const jwt = require('jsonwebtoken');

const SALTROUNDS = 10;
const authController = {};

/**
   * validateUserInput - verifies username and pass meet requirements
   *
   * @param req - cotains the user's username, password
   * @param res - unchanged
   */
authController.validateUserInput = (req, res, next) => {
  // console.log('validating user input');
  // console.log('req.body: ', req.body);

  let { username, password } = req.body;
  username = username.trim();
  password = password.trim();

  const message = {};
  if (!username) message.err = 'You must provide a username';
  if (!password) message.err = 'You must provide a password';
  if (password.length < 6) message.err = 'Your password must be longer than 6 characters';

  if (message.err) {
    return next({
      log: 'Invalid login credential',
      message,
    });
  }
  console.log('User input is valid');
  return next();
};

/**
   * isSigned - checks to see if the user has a valid token; should skip
   *            login if that's the case, but currently is not used in the
   *            authRouter to do so
   *
   * @param req - requires the username in the body, but doesn't use it currently
   * @param res - adds the property info that's just user info and an isSigned bool
   */
authController.isSigned = (req, res, next) => {
  console.log('checking if user is Signed');
  // if the token is empty continue onto the next piece of middleware (either signup or login)
  if (!req.cookies.token) return next();
  
  const { username } = req.body;
  // otherwise verify the token in the req body, using the jwt_key from the .env file
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, decoded) => {
    if (!decoded) {
      return next({
        log: 'Error verifying token',
        message: { err: 'Could not verify token' },
      });
    }
    res.locals.info = {
      isSigned: true,
      user: {
        username,
        id: req.cookies.id,
      },
    };

    return next();
  });
};

/**
   * singUp - checks the user's company to see if it's in the db, otherwise creates it
   *          then checks if the user's office is in the DB, else creates it,
   *          then does the same for user info
   *
   * @param req - cotains the user's username, password, companyName, 
   *              and officeLocation in the body
   * @param res - contains the user's username and id in its locals property
   */
authController.signUp = async (req, res, next) => {
  const { username, password, companyName, officeLocation } = req.body;

  const hashedPass = bcrypt.hashSync(password, SALTROUNDS);

  try {
    const addCompanyQ = {
      text: `INSERT INTO companies (name) VALUES ($1)
      ON CONFLICT (name) DO NOTHING
      RETURNING *`,
      values: [companyName],
    };
    // check if company name already exists
    let company = await pool.query(addCompanyQ);
    // if it was already in the DB, nothing is returned in rows
    if (!company.rows.length) {
      company = await pool.query({
        text: 'SELECT * FROM companies WHERE name = $1',
        values: [companyName],
      });
    }

    // check if the office already exists
    const addOfficeQ = {
      text: `INSERT INTO offices (name, company_id) VALUES ($1, $2)
      ON CONFLICT (name) DO NOTHING
      RETURNING *`,
      values: [officeLocation, company.rows[0]._id],
    };
    let office = await pool.query(addOfficeQ);
    // if it was already in the DB, nothing is returned in rows
    if (!office.rows.length) {
      office = await pool.query({
        text: 'SELECT * FROM offices WHERE name = $1',
        values: [officeLocation],
      });
    }

    // check if the user already exists
    const addEmployeeQ = {
      text: `INSERT INTO employees(username, password, office_id) VALUES($1, $2, $3)
      ON CONFLICT (username) DO NOTHING
      RETURNING *`,
      values: [username, hashedPass, office.rows[0]._id],
    };
    let user = await pool.query(addEmployeeQ);
    if (!user.rows.length) {
      user = pool.query({
        text: 'SELECT * FROM employees WHERE username = $1',
        values: [username],
      });
    }

    res.locals.user = user.rows[0];

    const payload = {
      success: true,
      user: { username: res.locals.user.username, id: res.locals.user._id },
    };

    const token = jwt.sign(payload, process.env.JWT_KEY,
      { algorithm: 'HS256', expiresIn: '1 day' });

    res.cookie('token', token, { httpOnly: true });
    res.cookie('id', user.rows[0]._id);
    return next();
  } catch (e) {
    return next({
      log: `Database error signing up: ${e.stack}`,
      status: 500,
      message: { err: 'Database error signing up' },
    });
  }
};

/**
   * login - Checks if the username is in the DB, and then checks the provided
   *         password agains the stored password
   *
   * @param req - cotains the user's username and password
   * @param res - adds the user's username, password, and jwt info to res.locals
   */
authController.login = async (req, res, next) => {
  const { username, password } = req.body;

  const findQuery = {
    text: 'select * from employees where username = $1',
    values: [username],
  };

  try {
    const result = await pool.query(findQuery);
    if (!result.rows.length) {
      return next({
        log: 'Database error logging in: user not found',
        message: { err: 'Incorrect user name' },
      });
    }
    const match = bcrypt.compare(password, result.rows[0].password);
    if (!match) {
      return next({
        log: 'Error logging in: incorrect password',
        message: { err: 'Incorrect password' },
      });
    }

    res.locals.user = {
      username: result.rows[0].username,
      id: result.rows[0]._id,
    };

    const payload = {
      success: true,
      user: res.locals.user,
    };

    const token = jwt.sign(payload, process.env.JWT_KEY,
      { algorithm: 'HS256', expiresIn: '1 day' });

    res.cookie('token', token, { httpOnly: true });
    res.cookie('id', result.rows[0]._id);
    res.locals.jwt = {
      token,
      isSigned: true,
    };

    return next();
  } catch (e) {
    return next({
      log: `Database error signing up: ${e.stack}`,
      status: 500,
      message: { err: 'Unknown database error logging in' },
    });
  }
};

module.exports = authController;
