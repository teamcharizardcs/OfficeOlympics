`CREATE TABLE IF NOT EXISTS companies (
	_id serial NOT NULL PRIMARY KEY,
	name varchar(50) NOT NULL UNIQUE,
	img_url varchar(255)
);

CREATE TABLE IF NOT EXISTS offices (
	_id serial NOT NULL PRIMARY KEY,
	name varchar(50) NOT NULL,
	company_id integer NOT NULL REFERENCES companies(_id)
);

CREATE TABLE IF NOT EXISTS employees (
	_id serial NOT NULL PRIMARY KEY,
	username varchar(50) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	office_id integer NOT NULL REFERENCES offices(_id),
	img_url varchar(255)
);

CREATE TABLE IF NOT EXISTS games (
	_id serial NOT NULL PRIMARY KEY,
	name varchar(50) NOT NULL,
	office_id integer NOT NULL REFERENCES offices(_id),
	img_url varchar(255)
);

CREATE TABLE IF NOT EXISTS stats (
	_id serial NOT NULL PRIMARY KEY,
	game_id integer NOT NULL REFERENCES games(_id),
	employee_id integer NOT NULL REFERENCES employees(_id),
	rank integer NOT NULL
);`