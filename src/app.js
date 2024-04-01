const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const routes = require('./routes');
routes(app)

const conn = require('./data/conn');
conn();

if(process.env.NODE_ENV !== 'test'){
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, (err) => {
    if (err) {
      console.error(`Erro ao iniciar o servidor: ${err}`);
    } else {
      console.log(`Servidor online na porta ${PORT}`);
    }
  });
}