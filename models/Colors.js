const mongoose = require("mongoose");
const Schema = mongoose.Schema;         //Esquema de mongoose nos define como lucen los datos

const AsuntosSchema = new Schema({             //Para utilizarlo almaceno en una constante

     Name: String,
     Id: String

});

module.exports = mongoose.model('asunto',AsuntosSchema);


