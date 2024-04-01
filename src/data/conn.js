const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
});

async function conn() {
  try {
    await connection.connect(); // Conecte-se ao MySQL
    console.log('Conexão com o MySQL estabelecida com sucesso!');
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = conn;