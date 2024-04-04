const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

require('dotenv').config();

const routes = require('./routes');
routes(app);

const conn = require('./data/conn');
conn();

if(process.env.DB_SCHEMA){
  app.listen(8080, (err) => {
    if (err) {
      console.error(`Erro ao iniciar o servidor: ${err}`);
    } else {
      console.log(`Servidor de produção online`);
    }
  });
} else {
  app.listen(8080, (err) => {
    if (err) {
      console.error(`Erro ao iniciar o servidor: ${err}`);
    } else {
      console.log(`Servidor de teste online`);
    }
  });
}