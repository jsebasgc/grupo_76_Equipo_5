const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const canchaSchema = new Schema({
    complejoDeportivo:{
        type: String
    },
    numCancha:{
        type: Number
    },
    disponibilidad:{
        type: String
    },
    phFds:{
        type: Number
    },
    phEs:{
        type: Number
    }
}, {
    collection: "canchas"
});

module.exports = mongoose.model("Cancha", canchaSchema);