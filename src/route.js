const express = require('express');
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router(); /**possui todas opçoes de rota que a funcao express tem */

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);

route.post('/question/create/:room', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);


module.exports = route;


//formato que o formulario de dentro da modal tem que passar a informação 
// route.get('/room/:room/:question/:action' , (req, res) => res.render("exemplo", {req}));
//route.post('/room/323232/2/check');