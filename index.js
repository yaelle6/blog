const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoute = require('./routes/post.js');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/posts', postRoute);


app.listen(PORT, () => {
	console.log(`The app is running on port ${PORT}`);
});
