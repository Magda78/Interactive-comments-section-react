const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    image: {
		png: String,
		webp: String
	},
	username: String
})

module.exports = mongoose.model("User", userSchema)