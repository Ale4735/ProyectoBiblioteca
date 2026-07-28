// Importa la librería mysql2
const mysql = require('mysql2');

// Carga las variables del archivo .env
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Exporta la conexión para usarla en otras partes del proyecto
module.exports = connection;