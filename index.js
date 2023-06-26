const express = require("express");
const { connectDB } = require("./src/config/db");
const gatosRoutes = require("./src/api/routes/gatos");
const cors = require("cors")

const server = express();

connectDB();
server.use(cors())

server.use(express.json());

server.use("/api/v1/gatos", gatosRoutes);

server.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
})