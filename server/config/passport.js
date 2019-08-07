const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const pool = require('../db/db.js');

const key = process.env.JWT_KEY;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key;

module.exports = () => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    pool.query({
      text: 'select * from employees where password = $1',
      values: [jwt_payload.id],
    }, (err, result) => {
      console.log('jwt query is resolved');
      if (result.rows.length > 0) {
        return done(null, result.rows[0]);
      }
      return done(null, false);
    });
  }));
  console.log('jwt query is finished');
};
