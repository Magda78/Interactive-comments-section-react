const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	"currentUser": {
		"image": { 
		  "png": String,
		  "webp": String
		},
		"username": String
	  }
})

module.exports = mongoose.model("user", userSchema)