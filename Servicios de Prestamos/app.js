require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");
const prestamosRoutes = require("./routes/prestamosRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Microservicio Préstamos funcionando");
});

app.use("/prestamos", prestamosRoutes);
console.log("Rutas de prestamos cargadas");

const PORT = process.env.PORT || 3003;

sequelize.sync()
    .then(() => {

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });

    })
    .catch(error => {
        console.log(error);
    });
