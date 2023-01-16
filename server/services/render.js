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
