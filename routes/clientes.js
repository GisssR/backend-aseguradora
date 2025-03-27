const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { nombre, email } = req.body;
  console.log('Cliente recibido:', nombre, email);
  res.status(201).json({ mensaje: 'Cliente registrado correctamente ✅' });
});

module.exports = router;

