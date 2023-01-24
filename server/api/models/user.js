const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
    image: {
		png: String,
		webp: String
	},
	username: String
})

module.exports = mongoose.model("User", userSchema)