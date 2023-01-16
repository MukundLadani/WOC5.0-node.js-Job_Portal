const express=require('express');
const route=express.Router()

const services = require('../services/render');

route.get("/", services.homeRoutes);

route.get("/company", services.company);
route.get("/student", services.student);
route.get("/company_login", services.company_login);
route.get("/student_login", services.student_login);

module.exports=route