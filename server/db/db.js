const { Pool } = require('pg');
/**
* require pg for postgres
* assume conString will be defined without requiring 'dotenv'
* the conString will be the login/password/database for elephantSQL
*
*/

const conString = process.env.DB_URI;
const pool = new Pool({ connectionString: conString });

pool
  .connect()
  .then(client => client
    .query(`CREATE TABLE IF NOT EXISTS companies (
      "_id" serial PRIMARY KEY NOT NULL,
      name varchar (50) NOT NULL UNIQUE,
      img_url varchar (255)
    )`)
    .then(() => client.query(`CREATE TABLE IF NOT EXISTS offices (
      "_id" serial NOT NULL PRIMARY KEY,
      name varchar (50) UNIQUE NOT NULL,
      company_id integer NOT NULL REFERENCES companies("_id")
    )`))
    .then(() => client.query(`CREATE TABLE IF NOT EXISTS employees (
      "_id" serial NOT NULL PRIMARY KEY,
      username varchar (50) NOT NULL UNIQUE,
      password VARCHAR (255) NOT NULL,
      office_id integer NOT NULL REFERENCES offices("_id"),
      img_url varchar (255)
    )`))
    .then(() => client.query(`CREATE TABLE IF NOT EXISTS games (
      "_id" serial NOT NULL PRIMARY KEY,
      name varchar (50) NOT NULL,
      office_id integer NOT NULL REFERENCES offices("_id"),
      img_url varchar (255)
    )`))
    .then(() => client.query(`CREATE TABLE IF NOT EXISTS stats (
      "_id" serial NOT NULL PRIMARY KEY,
      game_id integer NOT NULL REFERENCES games("_id"),
      employee_id integer NOT NULL REFERENCES employees("_id"),
      rank integer NOT NULL
    )`))
    .then(() => console.log('Working PG connection'))
    .then(() => client.release())
    .catch((e) => {
      client.release();
      console.log(e.stack);
    }))
  .catch(e => console.log(e.stack));

module.exports = {
  query: queryObj => pool.query(queryObj),
};
