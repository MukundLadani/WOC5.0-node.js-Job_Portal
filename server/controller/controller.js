var { Studentdb, Companydb } = require("../model/model");

//create and save new user
exports.create = (req, res) => {
	//validate request
	if (!req.body) {
		res.status(400).send({ message: "Content cannot be empty!" });
		return;
	}

	if (req.body.password != req.body.confirm_password) {
		res
			.status(400)
			.send({ message: "Password and confirm password are not same!" });
		return;
	}

	//new user
	const user = new Studentdb({
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

	//save user in the database
	user
		.save(user)
		.then((data) => {
			// res.send(data);
			res.redirect("/");
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occured while creating a create operation!",
			});
		});
};

//retrive and return all users/ retrive and return a single user
exports.find = (req, res) => {
	if (req.query.id) {
		const id = req.query.id;

		Studentdb.findById(id)
			.then((data) => {
				if (!data) {
					res.status(404).send({ message: "Not found user withd id:" + id });
				} else {
					res.send(data);
				}
			})
			.catch((err) => {
				res.status(500).send({ message: "Error retrieving user with id" + id });
			});
	} else {
		Studentdb.find()
			.then((user) => {
				res.send(user);
			})
			.catch((err) => {
				res.status(500).send({
					message:
						err.message || "Error occured while retriving user information",
				});
			});
	}
};

//update a new identified user by user id
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({ message: "Data to update cannot be empty" });
	}

	// const email = req.params.email;
	// const password = req.params.password;
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

//delete a user with specified user id in the request
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
