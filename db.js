const mysql = require('mysql');
require('dotenv').config();

const HOST = process.env.MYSQL_HOST;
const USER = process.env.MYSQL_USER;
const PASSWORD = process.env.MYSQL_PASSWORD;

const con = mysql.createConnection({
	host: HOST,
	user: USER,
	password: PASSWORD
});

con.connect((err) => {
	if (err) throw err;
	console.log('conneted');
});

con.query('CREATE DATABASE IF NOT EXISTS blog', (err) => {
	if (err) throw err;
	console.log('database created');
});

con.query(
	'CREATE TABLE IF NOT EXISTS blog.user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))',
	(err) => {
		if (err) throw err;
		console.log('user table created');
	}
);

con.query(
	'CREATE TABLE IF NOT EXISTS blog.post (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(255), text TEXT, image_url TEXT, author INT, PRIMARY KEY (id), FOREIGN KEY (author) REFERENCES user(id) ON DELETE CASCADE)',
	(err) => {
		if (err) throw err;
		console.log('posts table created');
	}
);

con.query(
	'CREATE TABLE IF NOT EXISTS blog.comment (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(255), text TEXT, post_id INT, author INT, PRIMARY KEY (id), FOREIGN KEY (author) REFERENCES user(id) ON DELETE CASCADE, FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE)',
	(err) => {
		if (err) throw err;
		console.log('comments table created');
	}
);
module.exports = con;
