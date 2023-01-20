const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

route.get("/", services.homeRoutes);

route.get("/company", services.company);
route.get("/student", services.student);
route.get("/company_login", services.company_login);
route.get("/student_login", services.student_login);
route.get("/student_show", services.student_show);
route.get("/company_show", services.company_show);

//API
//student
route.post("/api/students", controller.create);
route.get("/api/students", controller.find);
route.put("/api/students/:email", controller.update);
route.delete("/api/students/:email", controller.delete);

//company
route.post("/api/companies", controller.createcompany);
route.get("/api/companies", controller.findcompany);
route.put("/api/companies/:email", controller.updatecompany);
route.delete("/api/companies/:email", controller.deletecompany);

module.exports = route;
