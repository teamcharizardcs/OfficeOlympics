const pool = require('../db/db.js');

const employeesController = {};

// Given a userid return the avatar and username 
employeesController.getInfo = async (req, res, next) => {
  const { userId } = req.params;

  const query = {
    text: 'SELECT username, img_url FROM employees WHERE _id = $1',
    values: [userId],
  };

  try {
    const userInfo = await pool.query(query);
    if (!userInfo.rows.length) {
      return next({
        log: 'Database error finding user',
        message: { err: 'Could not find user' },
      });
    }

    res.locals.data = {
      avatar: userInfo.rows[0].imgurl,
      username: userInfo.rows[0].username,
    };

    return next();
  } catch (e) {
    return next({
      log: 'Database error getting user info',
      message: { err: 'Could not find user in database' },
    });
  }
};

// employeesController.addGame = () => {
// };

module.exports = employeesController;
