const pool = require('../db/db.js');

const gamesController = {};

gamesController.getGames = async (req, res, next) => {
  const { officeId } = req.params;
  try {
    const query = {
      text: `SELECT games.name, employees.username, stats.rank from games
      join stats on games._id = stats.game_id
      join employees on stats.employee_id = employees._id
      where games.office_id = $1`,
      values: [officeId],
    };

    const result = await pool.query(query);
    // console.log(result.rows);
    const games = {};
    result.rows.forEach((row) => {
      if (!games[row.name]) {
        games[row.name] = [];
      }
      games[row.name].push({name: row.username, rank: row.rank});
    });
    console.log(JSON.stringify(games));
    
    res.locals.games = games;
    return next();
  } catch (e) {
    return next({
      log: `Database error getting office games: ${e.stack}`,
      message: { err: 'Could not get games from database' },
    });
  }
};

// Given a game name, an officeid and a userid:
// 1) add a new game to the list of games for the office
// 2) add the user to that game at rank 1
gamesController.newGame = async(req, res, next) => {
  const { gameName, officeId, userId } = req.params;

  const insertQuery = {
    text: 'INSERT INTO games(name, office_id) VALUES($1, $2) RETURNING *',
    values: [gameName, officeId],
  };

  try {
    let newGame = await pool.query({
      text: 'SELECT * FROM games WHERE name = $1 AND office_id = $2',
      values: [gameName, officeId],
    });
    // game does not exist
    if (!newGame.rows.length) {
      newGame = await pool.query(insertQuery);
    }

    if (!newGame.rows.length) {
      return next({
        log: 'No game added to DB',
        message: { err: 'Could not add game to DB' },
      });
    }

    const gameId = newGame.rows[0]._id;
    console.log(`gameid is ${gameId}`);

    const insertUser = {
      text: 'INSERT INTO stats(employee_id, game_id, rank) VALUES($1, $2, $3) RETURNING *',
      values: [userId, gameId, 1],
    };

    const stat = await pool.query(insertUser);
    console.log(`stat is ${JSON.stringify(stat.rows)}`);
    if (!stat.rows.length) {
      return next({
        log: 'No stats added to DB',
        message: { err: 'Could not add stats to DB' },
      });
    }
    res.locals.data = stat;

    return next();
  } catch (e) {
    return next({
      log: `Database error adding game : ${e.stack}`,
      message: { err: 'Database error adding game' },
    });
  }
};

module.exports = gamesController;
