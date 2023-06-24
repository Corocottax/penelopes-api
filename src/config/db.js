const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://root:root@cluster0.xngi9nk.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado a la bbdd 😎");
    } catch (error) {
        console.log("error conectando a la bbdd");
    }
}

module.exports = { connectDB }