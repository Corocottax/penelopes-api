const Gato = require("../models/gatos")

const getGatos = async (req, res, next) => {
    try {

        const gatos = await Gato.find();

        return res.status(200).json(gatos);

    } catch (error) {
        return res.status(400).json("Error recogiendo los gatos")
    }
}

const postGatos = async (req, res, next) => {
    try {

        const newGato = new Gato(req.body);

        const gato = await newGato.save();

        return res.status(201).json(gato)
        
    } catch (error) {
        return res.status(400).json("Error publicando gatos")
    }
}

const putGatos = async (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("Error actualizando los gatos")
    }
}

const delGatos = async (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("Error eliminando los gatos")
    }
}

module.exports = {
    getGatos,
    postGatos,
    putGatos,
    delGatos
}