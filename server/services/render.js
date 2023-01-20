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
	//Make a get request to /api/users
	// console.log(String(req.query.email));
	axios
		.get("http://localhost:3000/api/students", {
			params: { email: String(req.query.email) },
		})
		.then(function (studentdata) {
			res.render("student_show", { student: studentdata.data });
		})
		.catch((err) => {
			req.send(err);
		});
};

/**
 *
 * @description company_show route
 * @method GET
 */
exports.company_show = (req, res) => {
	//Make a get request to /api/users
	// console.log(String(req.query.email));
	axios
		.get("http://localhost:3000/api/companies", {
			params: { email: String(req.query.email) },
		})
		.then(function (companydata) {
			res.render("company_show", { company: companydata.data });
		})
		.catch((err) => {
			req.send(err);
		});
};
