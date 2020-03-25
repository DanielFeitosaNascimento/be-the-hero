const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
 /* função usada para fazer com
que o express entenda as requisições em json */ 

/*
* Query params: São parametros nomeados enviados 
* após ? (Filtros, Paginação)
* Route params: São parâmetros utilizados para 
* indentificar recursos 
* Request Body: Corpo da requisição , utilizado 
* para criar ou alterar recursos 
*/
/* SQL: MYSQL, POSTGRESQL
*  NOSQL: MONGODB, COUCHDB, ETC
* DRIVER , QUERY BUILDER: TABLE('USERS').SELECT('*')
* yarn ou npm > knex > depois add qual o banco de dados 
* vamos utilizar 
*/ 
app.listen(3333);


 