const mongoose = require("mongoose");

const student = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	confirm_password: {
		type: String,
		required: true,
	},
	batch_year: {
		type: String,
		required: true,
	},
	cpi: {
		type: Number,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	tech_stack: {
		type: String,
	},
	gender: String,
});

const Userdb = mongoose.model("userdb", student);

module.exports = Userdb;
