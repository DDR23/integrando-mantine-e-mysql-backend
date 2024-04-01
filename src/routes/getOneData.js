const express = require('express');
const router = express.Router();
const userSchema = require('../schema/useSchema'); // Importe o esquema do usuário

// Rota para obter todos os usuários
router.get('/:id', async (req, res) => {
  try {
    const user = await userSchema.findByPk(req.params.id); // Recupere todos os usuários
    if(!user){
      return res.status(404).json({ error: 'esse usuario não existe' })
    }
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuário' });
  }
});

module.exports = router; 