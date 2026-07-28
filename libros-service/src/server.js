// Importa la librería Express
const express = require('express');

const connection = require('./config/database');
const librosRoutes = require('./routes/librosRoutes');

// Crea la aplicación
const app = express();
app.use(express.json());

// Activa las rutas del microservicio de libros
app.use(librosRoutes);

// Puerto donde se ejecutará el microservicio
const PORT = 3002;

// Ruta principal para comprobar que el servidor funciona
app.get('/', (req, res) => {
    res.send('Microservicio de Libros funcionando correctamente');
});

// Prueba la conexión con MySQL
connection.connect((error) => {
    if (error) {
        console.error('❌ Error al conectar con MySQL:', error);
        return;
    }

    console.log('Conexión a MySQL establecida correctamente.');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor de Libros ejecutándose en http://localhost:${PORT}`);
});