const axios = require('axios');

const obtenerLibro = async (id) => {
    try {
        const respuesta = await axios.get(
            `http://localhost:3002/libros/${id}`
        );

        return respuesta.data;

    } catch (error) {
        return null;
    }
};

module.exports = {
    obtenerLibro
};