const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const polizasRoutes = require("./routes/polizas");
app.use("/polizas", polizasRoutes);

mongoose.connect("mongodb://localhost:27017/aseguradora", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
