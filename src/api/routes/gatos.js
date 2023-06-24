const { getGatos, postGatos } = require("../controllers/gatos");

const gatosRoutes = require("express").Router();

gatosRoutes.get("/", getGatos);
gatosRoutes.post("/", postGatos);

module.exports = gatosRoutes;