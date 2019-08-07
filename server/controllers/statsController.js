const pool = require('../db/db.js');

const statsController = {};

statsController.getLeaderBoard = async (req, res, next) => {
  const { officeId, gameName } = req.params;

  const query = {
    text: `SELECT offices.name as "officeLocation", 
    games.name as "gameName", employees.username, 
    employees.img_url, stats.rank 
    from games 
    join stats on games._id = stats.game_id 
    join employees on stats.employee_id = employees._id 
    join offices on games.office_id = offices._id 
    where games.name = $1 and games.office_id = $2
    order by stats.rank asc;`,
    values: [gameName, officeId],
  };

  try {
    const result = await pool.query(query);
    res.locals.leaderboard = result.rows;
    return next();
  } catch (e) {
    return next({
      log: 'Database error getting the leaderboard',
      message: { err: 'Datbase error getting leaderboard' },
    });
  }
};

statsController.moveUser = (req, res, next) => {
  // const { gameName, userId, position } = req.params;

  return next();
  // let data = {};
  // console.log("Changing the following game: ", gameToChange);
  // console.log("We are going to rank this user: ", userToMove);
  // console.log("In this way: ", rankDirection);
  // //in req.body.rank you can specify "up", "down" or "last"
  // //req.body.rank "last" indicates that the user just joined 
  // the game so we want to add them to the bottom of the ladder
  // //not sure how we will do this........
  // res.send({NewLeaderBoard: "someLeaderBoardArr"}) 
};

module.exports = statsController;