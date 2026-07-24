const connection = require('../config/database');

// Obtener todos los libros
const obtenerLibros = (req, res) => {

    connection.query(
        'SELECT * FROM libros',
        (error, resultados) => {

            if (error) {
                return res.status(500).json({
                    mensaje: 'Error al obtener los libros'
                });
            }

            res.json(resultados);

        }
    );

};

// Registrar un nuevo libro
const registrarLibro = (req, res) => {

    const {
        titulo,
        autor,
        genero,
        editorial,
        anio,
        disponible
    } = req.body;

    const sql = `
        INSERT INTO libros
        (titulo, autor, genero, editorial, anio, disponible)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [titulo, autor, genero, editorial, anio, disponible],
        (error, resultado) => {

            if (error) {
                return res.status(500).json({
                    mensaje: 'Error al registrar el libro'
                });
            }

            res.status(201).json({
                mensaje: 'Libro registrado correctamente',
                id: resultado.insertId
            });

        }
    );

};

// Obtener solamente libros disponibles
const obtenerLibrosDisponibles = (req, res) => {

    const sql = 'SELECT * FROM libros WHERE disponible = 1';

    connection.query(sql, (error, resultados) => {

        if (error) {
            return res.status(500).json({
                error: 'Error al consultar libros disponibles'
            });
        }

        res.json(resultados);
    });

};

// Actualizar disponibilidad de un libro
const actualizarDisponibilidad = (req, res) => {

    const id = req.params.id;
    const { disponible } = req.body;

    const sql = 'UPDATE libros SET disponible = ? WHERE id = ?';

    connection.query(sql, [disponible, id], (error, resultado) => {

        if (error) {
            return res.status(500).json({
                error: 'Error al actualizar disponibilidad'
            });
        }

        res.json({
            mensaje: 'Disponibilidad actualizada correctamente'
        });

    });

};

module.exports = {
    obtenerLibros,
    registrarLibro,
    obtenerLibrosDisponibles,
    actualizarDisponibilidad
};