const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,
		username: "String",
		png: "String",
		webp: "String"
});

module.exports = mongoose.model('User', userSchema);
