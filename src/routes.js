const express = require("express");
const hospedesController = require("./controllers/hospedesController");
const loginController = require("./controllers/loginController");
const connection = require("./database/connection");

const routes = express.Router();
routes.post("/login", loginController.create);
routes.get("/cadastro", hospedesController.index);
routes.post("/cadastro", hospedesController.create);

module.exports = routes;
