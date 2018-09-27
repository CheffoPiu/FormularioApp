var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

const app = express();


//coonecting to db
mongoose.connect('mongodb://localhost:27017/guardar-datos')
    .then(db => console.log('DB COnected'))
    .catch(err => console.log(err));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(logger('dev'));   //informacion de como esta el proceso de ida y vuelta
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // urlencoded entiende los datos enviados por html - extended false solo texto no datos pesados
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// middlewares se ejecuta antes de que lleguen a las rutas  del servidor se ejecuta primero




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
