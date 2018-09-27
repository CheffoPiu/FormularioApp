/**
 * Created by Cheffo on 25/9/2018.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;         //Esquema de mongoose nos define como lucen los datos

const MarcaSchema = new Schema({             //Para utilizarlo almaceno en una constante

    name: String,
    id: String


});

module.exports = mongoose.model('marca',MarcaSchema);

