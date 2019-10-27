const postRoute = require('express').Router();
const db = require('../db');

postRoute.post('/add', (req, res) => {
	if (req.body.title && req.body.text) {
		const sql = `INSERT INTO post (title, text, image_url) VALUES ('${req.body.title}', '${req.body.text}', '${req
			.body.image}')`;
		db.query(sql, (err, result) => {
			if (err) res.send(err);
			res.send(result);
		});
	}
});

postRoute.get('/', (req, res) => {
	db.query('SELECT * FROM blog.post', (err, posts) => {
		if (err) res.send(err);
		res.json(posts);
	});
});

postRoute.get('/:id', (req, res) => {
	db.query(`SELECT * FROM blog.post WHERE id = ${req.params.id}`, (err, post) => {
		if (err) res.send(err);
		res.send(post);
	});
});

module.exports = postRoute;
