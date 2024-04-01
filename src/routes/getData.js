const express = require('express');
const router = express.Router();
const userSchema = require('../schema/useSchema'); // Importe o esquema do usuário

// Rota para obter todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await userSchema.findAll(); // Recupere todos os usuários
    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuários' });
  }
});

module.exports = router;