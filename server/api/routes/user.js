const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose')
const User = require('../models/user');

router.post('/', (req, res) => {
	console.log('req body',req.body);
	const user = new User({
		image: {
			png: '2',
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
