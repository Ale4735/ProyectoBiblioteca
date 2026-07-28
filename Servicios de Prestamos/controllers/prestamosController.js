const Prestamo = require("../models/Prestamo");

// Registrar un préstamo
const crearPrestamo = async (req, res) => {
    try {
        const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = req.body;

        const nuevoPrestamo = await Prestamo.create({
            usuario_id,
            libro_id,
            fecha_prestamo,
            fecha_devolucion,
            estado: "Prestado"
        });

        res.status(201).json({
            mensaje: "Préstamo registrado correctamente",
            prestamo: nuevoPrestamo
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar el préstamo",
            error: error.message
        });
    }
};

// Obtener historial de préstamos
const obtenerPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.findAll();

        res.status(200).json(prestamos);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los préstamos",
            error: error.message
        });
    }
};

module.exports = {
    crearPrestamo,
    obtenerPrestamos
};