const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const polizasRoutes = require("./routes/polizas");
const clientesRoutes = require("./routes/clientes");

// Usar rutas
app.use("/polizas", polizasRoutes);
app.use("/api/clientes", clientesRoutes);

// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/aseguradora", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.log(err));

// Ruta raíz
app.get("/", (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
});

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
