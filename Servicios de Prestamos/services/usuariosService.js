const axios = require('axios');

const obtenerUsuario = async (id) => {
    try {
        const respuesta = await axios.get(
            `http://localhost:3001/usuarios/${id}`
        );

        return respuesta.data;

    } catch (error) {
        return null;
    }
};

module.exports = {
    obtenerUsuario
};