var express = require('express');
var router = express.Router();

const Vehiculos = require("../models/Propiedades");  //Llamo al esquema de mis datos
/*const Marcas = require('../models/Marcas');*/
const Asunto = require('../models/Colors');








/* GET home page. */
router.get('/', async function(req, res, next) {    // async y await ejecuta metodos asincronos como almacenado de datos sin la necesidad de usar promesas
  const vehiculos = await Vehiculos.find();
  /*const marca = await Marcas.find();*/
    const asunto = await Asunto.find();
    console.log(vehiculos);
    /*console.log(marca);*/
    console.log(asunto);
    res.render('index', {
        vehiculos,/*marca,*/asunto
    });
});




    router.post('/add', async function(req, res, next) {   //recive los datos del formulario

 /* console.log(new Task(req.body));
  res.send('recived');  para mostrar*/
    const Propiedades = new Vehiculos(req.body);
    await Propiedades.save();                         // Almacena
    res.redirect('/');                                // regresa a mi pagina de inicio
});

router.get('/edit/:id', async function(req, res, next){
    const {id} = req.params;                            // Recive el id
    const Propiedades = await Vehiculos.findById(id);   // Busca el id
    res.render('edit',{                                 // renderizar una vista
      Propiedades                                       // paso la propiedad
    });
});

router.post('/edit/:id', async function(req, res, next){
    const {id} = req.params;
    await Vehiculos.update({_id: id}, req.body);
    res.redirect('/');
});


router.get('/delete/:id', async function(req, res, next){
    const {id} = req.params;        //recive los parametrs
    await Vehiculos.remove({_id: id});
    res.redirect('/');
});



module.exports = router;

