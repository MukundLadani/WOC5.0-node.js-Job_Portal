var { Studentdb, Companydb } = require("../model/model");
const { student } = require("../services/render");

//create and save new student
exports.create = (req, res) => {
	//validate request
	if (!req.body) {
		res.status(400).send({ message: "Content cannot be empty!" });
		return;
	}

	if (!req.body.confirm_password) {
		// console.log(req.body);
		const email = req.body.email;
		const password = req.body.password;

		Studentdb.find({ email: email })
			.then((data) => {
				if (!data) {
					res
						.status(404)
						.send({ message: "Not found user with email:" + email });
				} else {
					console.log(password);
					console.log(data[0].password);
					if (data[0].password == password) {
						res.redirect(`/student_show?email=${String(email)}`);
					} else {
						res.status(404).send({ message: "Invalid Password or email!" });
					}
					// res.send(data);
				}
			})
			.catch((err) => {
				res
					.status(500)
					.send({ message: "Error retrieving user with email" + email });
			});
		return;
	} else if (req.body.password != req.body.confirm_password) {
		// console.log();
		res
			.status(400)
			.send({ message: "Password and confirm password are not same!" });
		return;
	}

	//new student
	const student = new Studentdb({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
		batch_year: req.body.batch_year,
		cpi: req.body.cpi,
		age: req.body.age,
		tech_stack: req.body.tech_stack,
		gender: req.body.gender,
	});

	//save student in the database
	student
		.save(student)
		.then((data) => {
			// res.send(data);
			res.redirect(`/student_show?email=${String(student.email)}`);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occured while creating a create operation!",
			});
		});
};

//retrive and return a single student
exports.find = (req, res) => {
	// console.log(req.query);
	if (req.query.email) {
		const email = req.query.email;

		Studentdb.find({ email: email })
			.then((data) => {
				if (!data) {
					res
						.status(404)
						.send({ message: "Not found user withd email:" + email });
				} else {
					res.send(data);
				}
			})
			.catch((err) => {
				res
					.status(500)
					.send({ message: "Error retrieving user with email" + email });
			});
	} else {
		res
			.status(500)
			.send({ message: "Request query doesn't have email in it!" });
		return;
	}
};

//update a new identified user by student id
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({ message: "Data to update cannot be empty" });
	}

	const id = req.params.id;
	Studentdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot Update user with ${id}. Maybe user not found!`,
				});
			} else {
				res.send(data);
			}
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: "Error occured while updating user information" });
		});
};

//delete a user with specified student id in the request
exports.delete = (req, res) => {
	const id = req.params.id;
	Studentdb.findByIdAndDelete(id)
		.then((data) => {
			if (!data) {
				res
					.status(404)
					.send({ message: `Cannot Delete with id:${id}. Maybe id is wrong!` });
			} else {
				res.send({ message: "User deleted successfully!" });
			}
		})
		.catch((err) => {
			res.status(500).send({ message: "Could not delete User with id=" + id });
		});
};

//company api methods
//create and save new student
exports.createcompany = (req, res) => {
	//validate request
	if (!req.body) {
		res.status(400).send({ message: "Content cannot be empty!" });
		return;
	}

	if (!req.body.confirm_password) {
		// console.log(req.body);
		const email = req.body.email;
		const password = req.body.password;

		Companydb.find({ email: email })
			.then((data) => {
				if (!data) {
					res
						.status(404)
						.send({ message: "Not found user with email:" + email });
				} else {
					if (data[0].password == password) {
						res.redirect(`/company_show?email=${String(email)}`);
					} else {
						res.status(404).send({ message: "Invalid Password or email!" });
					}
					// res.send(data);
				}
			})
			.catch((err) => {
				res
					.status(500)
					.send({ message: "Error retrieving user with email" + email });
			});
		return;
	} else if (req.body.password != req.body.confirm_password) {
		// console.log();
		res
			.status(400)
			.send({ message: "Password and confirm password are not same!" });
		return;
	}

	//new company
	const company = new Companydb({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
		cpi: req.body.cpi,
		age: req.body.age,
		website: req.body.website,
		position: req.body.position,
		package: req.body.package,
		tech_stack: req.body.tech_stack,
	});

	//save company in the database
	company
		.save(company)
		.then((data) => {
			// res.send(data);
			res.redirect(`/company_show?email=${String(company.email)}`);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occured while creating a create operation!",
			});
		});
};

//retrive and return a single company
exports.findcompany = (req, res) => {
	// console.log(req.query);
	if (req.query.email) {
		const email = req.query.email;

		Companydb.find({ email: email })
			.then((data) => {
				if (!data) {
					res
						.status(404)
						.send({ message: "Not found user withd email:" + email });
				} else {
					res.send(data);
				}
			})
			.catch((err) => {
				res
					.status(500)
					.send({ message: "Error retrieving user with email" + email });
			});
	} else {
		res
			.status(500)
			.send({ message: "Request query doesn't have email in it!" });
		return;
	}
};

//update a new identified user by company id
exports.updatecompany = (req, res) => {
	if (!req.body) {
		return res.status(400).send({ message: "Data to update cannot be empty" });
	}

	const id = req.params.id;
	Companydb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot Update user with ${id}. Maybe user not found!`,
				});
			} else {
				res.send(data);
			}
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: "Error occured while updating user information" });
		});
};

//delete a user with specified company id in the request
exports.deletecompany = (req, res) => {
	const id = req.params.id;
	Companydb.findByIdAndDelete(id)
		.then((data) => {
			if (!data) {
				res
					.status(404)
					.send({ message: `Cannot Delete with id:${id}. Maybe id is wrong!` });
			} else {
				res.send({ message: "User deleted successfully!" });
			}
		})
		.catch((err) => {
			res.status(500).send({ message: "Could not delete User with id=" + id });
		});
};
