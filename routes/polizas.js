const express = require("express");
const router = express.Router();
const Poliza = require("../models/Poliza");

router.post("/", async (req, res) => {
  try {
    const nuevaPoliza = new Poliza(req.body);
    await nuevaPoliza.save();
    res.status(201).json(nuevaPoliza);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const polizaActualizada = await Poliza.findByIdAndUpdate(id, req.body, { new: true });
    if (!polizaActualizada) {
      return res.status(404).json({ message: "Póliza no encontrada" });
    }
    res.json(polizaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const polizaEliminada = await Poliza.findByIdAndDelete(id);
    if (!polizaEliminada) {
      return res.status(404).json({ message: "Póliza no encontrada" });
    }
    res.json({ message: "Póliza eliminada correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const polizas = await Poliza.find();
    res.json(polizas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
