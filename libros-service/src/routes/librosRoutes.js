const express = require('express');
const router = express.Router();

const {
    obtenerLibros,
    registrarLibro,
    obtenerLibrosDisponibles,
    actualizarDisponibilidad
} = require('../controllers/librosController');

// Ruta para obtener todos los libros
router.get('/libros', obtenerLibros);

// Ruta para registrar un libro
router.post('/libros', registrarLibro);

// Ruta para consultar libros disponibles
router.get('/libros/disponibles', obtenerLibrosDisponibles);

// Actualizar disponibilidad de un libro
router.put('/libros/:id/disponibilidad', actualizarDisponibilidad);

module.exports = router;