const express = require("express");
const router = express.Router();

const prestamosController = require("../controllers/prestamosController");

router.get("/", prestamosController.obtenerPrestamos);

router.post("/", prestamosController.crearPrestamo);

module.exports = router;