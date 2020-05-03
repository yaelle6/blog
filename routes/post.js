const postRoute = require('express').Router();
const db = require('../db');

postRoute.get('/', (req, res) => {
	db.query('SELECT * FROM blog.post;', (err, posts) => {
		if (err) res.send(err);
		res.json(posts);
	});
});

postRoute.post('/add', (req, res) => {
	const title = req.body.title
	const text = req.body.text
	const image_url = req.body.image_url || null

	if (title && text) {
		const sql = `INSERT INTO blog.post (title, text, image_url) VALUES ('${title}', '${text}', '${image_url}');`;
		db.query(sql, (err, result) => {
			if (err) res.send(err);
			res.send(result);
		});
	}
});

postRoute.get('/:id', (req, res) => {
	db.query(`SELECT * FROM blog.post WHERE id = ${req.params.id};`, (err, post) => {
		if (err) res.send(err);
		res.send(post);
	});
});

postRoute.put('/:id', (req, res) => {
	if(req.body.title || req.body.text ||  req.body.image_url)
	db.query(`UPDATE blog.post SET title = '${req.body.title}', text = '${req.body.text}', image_url = '${req.body.image_url}' WHERE id = ${req.params.id};`, (err, post) => {
		if (err) res.send(err);
		res.send(post);
	});
})

module.exports = postRoute;
