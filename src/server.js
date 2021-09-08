const express = require('express'); /**modulo do nodejs */
const route = require('./route');
const path = require('path'); /**modulo path */

const server = express();/*inicia o express */

server.set('view engine' , 'ejs');

server.use(express.static("public"));

server.set('views', path.join(__dirname, 'views'));
// .../rocketq/src/views

server.use(express.urlencoded({extended: true})) //Middleware
 
server.use(route);

server.listen(3000, () => console.log("Rodando"));/*listem, uma função q existe no express */
/** arrow funcion, roda uma funcionalidade */









