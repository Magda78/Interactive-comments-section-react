const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
//const mongoose = require('mongoose')
const User = require('../models/user');
const multer = require('multer');
const Cards = require('../../dbCards')
//const upload = multer({ dest: 'uploads/' });

//router.post('/', upload.single('userImage'), (req, res) => {
//	req.file = req.body.png;
//	console.log('req body', req.body, req.file);
//	const user = new User({
//		_id: new mongoose.Types.ObjectId(),
//		image: {
//			png: '.'.concat(req.body.png),
//			webp: '2'
//		},
//		username: req.body.username
//	});
//	user.save().then((res) => console.log(res)).catch((err) => console.log(err));
//	res.status(200).json({
//		msg: 'post'
//	});
//});
router.get('/', (req,res) => {
	res.status(200).send('he')
})
router.post('/', (req, res) => {
	const dbCards = req.body;
	Cards.create(dbCards, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});
router.post('/user', (req, res) => {
	const user = req.body;
	User.create(user, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

router.get('/', (req, res) => {
	User.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});



module.exports = router;
