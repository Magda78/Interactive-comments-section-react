const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	content: String,
	createdAt: String,
	score: Number,
	png: String,
	webp: String,
	username: String,
	//replies: Array
});

module.exports = mongoose.model('Comment', commentSchema);
