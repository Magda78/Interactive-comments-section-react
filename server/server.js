require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const User = require('./api/models/user');
const bodyParser = require('body-parser');
const  fs  = require('fs');
const app = express();
app.use(cors());
const port = 3001;
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	}
});

const upload = multer({ storage: storage });

const mongoosePath =
	'mongodb+srv://commentsDB:B59Sfc8TvyGwPFrd@mangodb-commentsdb.vkdjj9i.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);

mongoose.connect(mongoosePath, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.post('/user', upload.fields([ { name: 'png', maxCount: 1 }, { name: 'webp', maxCount: 1 } ]), (req, res) => {
	const pngNoExtension = req.files['png'][0]['filename'];
	const pngType = req.files['png'][0]['mimetype'].split('/')[1];
	const png = req.files['png'][0]['filename'] + '.' + pngType;
	const webpNoExtension = req.files['webp'][0]['filename'];
	const webpType = req.files['webp'][0]['mimetype'].split('/')[1];
	const webp = req.files['png'][0]['filename'] + '.' + webpType;
	fs.rename(`./uploads/${webpNoExtension}`, `./uploads/${webp}`, (err) => {
		console.log(err);
	});
	fs.rename(`./uploads/${pngNoExtension}`, `./uploads/${png}`, (err) => {
		console.log(err);
	});
	console.log(pngNoExtension)
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
		username: req.body.username,
		png: png,
		webp: webp
	});
	console.log('user', user);
	user
		.save()
		.then((result) => {
			console.log('resullt', result);
			res.status(201).json({
				currentUser: {
					_id: result._id,
					image: {
						png: result.png,
						webp: result.webp
					},
					username: result.username
				}
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

app.get('/user', (req, res) => {
	User.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
