const mongoose = require("mongoose");

const gatosSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    imagen: { type: String, required: true},
    rating: { type: Number, required: true, max: 5, min: 0}
}, {
    collection: "gatos"
});

const Gato = mongoose.model("gatos", gatosSchema, "gatos");
module.exports = Gato;