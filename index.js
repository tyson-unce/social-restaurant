const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 8080, () => {
	console.log('Server is Connected!');
});

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	port: process.env.DB_PORT,
});

app.get('/test', (req, res) => {
	res.send('Hello sir');
});

app.get('/restaurants', (req, res) => {
	connection.query('SELECT * FROM restaurants', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.get('/discovery', (req, res) => {
	connection.query('SELECT * FROM discover', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.get('/friends', (req, res) => {
	connection.query('SELECT * FROM friends', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.get('/history', (req, res) => {
	connection.query('SELECT * FROM my_history', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

//creating post method for inserting data from frontend
app.post('/addHistory', (req, res) => {
	const name = req.body.name;

	connection.query(
		'INSERT INTO my_history (name) VALUES (?)',
		[name],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send('table updated');
			}
		}
	);
});

app.post('/addFriend', (req, res) => {
	const name = req.body.name;
	const location = req.body.location;
	const recent = req.body.recent;
	const image = req.body.image;

	connection.query(
		'INSERT INTO userInfo (name, location, recent, image) VALUES (?,?,?,?)',
		[name, location, recent, image],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send('table updated');
			}
		}
	);
});
// SPECIFYING IF CONNECTION TO OUR DATABASE IS SUCCESSFUL OR UNSUCCESSFUL
connection.connect((err) => {
	if (err) {
		console.log(err.message);
	}
	console.log('AWS is LIT');
});
