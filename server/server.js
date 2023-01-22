require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const publicDir = require('path').join(__dirname, '/public/img/avatar');

const app = express();
app.use(cors());
const user = require("./api/routes/user")
const port = 3001;
app.use(express.static(publicDir));
app.use(express.json());
app.use('/user',user);

//app.use(bodyParser);

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './public/img/avatar/image-juliusomo.png');
	},

	filename: function(req, file, cb) {
		cb(null, file.originalname);
	}
});
const upload = multer({ storage });

const mongoosePath =
	'mongodb+srv://commentsDB:B59Sfc8TvyGwPFrd@mangodb-commentsdb.vkdjj9i.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);

mongoose.connect(mongoosePath, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
