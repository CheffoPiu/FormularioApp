var mongoose = require("mongoose");
var Schema = mongoose.Schema;         //Esquema de mongoose nos define como lucen los datos

var VehiculosSchema = new Schema({             //Para utilizarlo almaceno en una constante

    Marca: String,
    Modelo: String,
    Anio: String,
    Placa: String,
    Nmotor: String,
    Nchasis: String,
    Color: String,
    userId: String,
    userEmail: String,
    associatedObjectId: String,
    associatedObjectType: String,
    portalId: String

});

module.exports = mongoose.model('vehiculos',VehiculosSchema);




//Toma el esquema para guardar datos
//module .exports usar el modelo en otras partes