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

const company = new mongoose.Schema({
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
	cpi: {
		type: Number,
		required: true,
	},
	website: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	package: {
		type: String,
		required: true,
	},
	tech_stack: {
		type: String,
	},
});

const Studentdb = mongoose.model("studentdb", student);
const Companydb = mongoose.model("companydb", company);

module.exports = { Studentdb, Companydb };
