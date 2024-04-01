const express = require('express');
const router = express.Router();
const userSchema = require('../schema/useSchema'); // Importe o esquema do usuário

// Rota para criar um novo usuário
router.post('/adicionar', async (req, res) => {
  try {
    const { username, email } = req.body; // Obtenha os dados do corpo da solicitação
    const newUser = await userSchema.create({ username, email }); // Crie um novo usuário
    res.status(201).json(newUser); // Retorne o novo usuário criado
    
  } catch (error) {
    const emailNoUnique = error.parent.sqlState 
    if(emailNoUnique){
      return res.status(409).json({ error: 'Email já existe' })
    }
    res.status(500).json({ error: 'Não foi possível criar usuário' });
  }
});

module.exports = router;