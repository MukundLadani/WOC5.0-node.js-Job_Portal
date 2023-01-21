const { default: axios } = require("axios");

/**
 *
 * @description Root route
 * @method GET
 */
exports.homeRoutes = (req, res) => {
	res.render("index");
};

/**
 *
 * @description company route
 * @method GET
 */
exports.company = (req, res) => {
	res.render("company");
};

/**
 *
 * @description student route
 * @method GET
 */
exports.student = (req, res) => {
	res.render("student");
};

/**
 *
 * @description company_login route
 * @method GET
 */
exports.company_login = (req, res) => {
	res.render("company_login");
};

/**
 *
 * @description student_login route
 * @method GET
 */
exports.student_login = (req, res) => {
	res.render("student_login");
};

/**
 *
 * @description student_show route
 * @method GET
 */
exports.student_show = (req, res) => {
	// console.log(String(req.query.email));
	axios
		.get("http://localhost:3000/api/students", {
			params: { email: String(req.query.email) },
		})
		.then(function (studentdata) {
			res.render("student_show", { student: studentdata.data });
		})
		.catch((err) => {
			res.send(err);
		});
};

/**
 *
 * @description company_show route
 * @method GET
 */
exports.company_show = (req, res) => {
	// console.log(String(req.query.email));
	axios
		.get("http://localhost:3000/api/companies", {
			params: { email: String(req.query.email) },
		})
		.then(function (companydata) {
			res.render("company_show", { company: companydata.data });
		})
		.catch((err) => {
			res.send(err);
		});
};

/**
 *
 * @description update_student route
 * @method GET
 */
exports.update_student = (req, res) => {
	axios
		.get("http://localhost:3000/api/students", {
			params: { id: req.query.id },
		})
		.then(function (studentdata) {
			res.render("update_student", { student: studentdata.data });
		})
		.catch((err) => {
			res.send(err);
		});
};
/**
 *
 * @description update_company route
 * @method GET
 */
exports.update_company = (req, res) => {
	axios
		.get("http://localhost:3000/api/companies", {
			params: { id: req.query.id },
		})
		.then(function (companydata) {
			res.render("update_company", { company: companydata.data });
		})
		.catch((err) => {
			res.send(err);
		});
};
