const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

route.get("/", services.homeRoutes);

route.get("/company", services.company);
route.get("/student", services.student);
route.get("/company_login", services.company_login);
route.get("/student_login", services.student_login);
route.get("/show", services.student_show);

//API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:email:password", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
