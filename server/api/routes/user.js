const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
//const mongoose = require('mongoose')
const User = require('../models/user');
const multer = require('multer');
const upload  = multer({dest: 'uploads/'});

router.post('/',upload.single('userImage'), (req, res) => {
	req.file = req.body.png
	console.log('req body',req.body, req.file);
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
		image: {
			png: '.'.concat(req.body.png),
			webp: '2'
		},
		username: req.body.username
	});
	user.save().then((res) => console.log(res)).catch((err) => console.log(err));
	res.status(200).json({
		msg: 'post'
	});
});
router.get('/', (req, res) => {
	res.status(200).json({
		msg: 'get'
	});
});

module.exports = router;