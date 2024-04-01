const express = require('express');
const router = express.Router();
const userSchema = require('../schema/useSchema'); // Importe o esquema do usuário

// Rota para criar um novo usuário
router.put('/editar/:id', async (req, res) => {
  try {
    const user = await userSchema.findByPk(req.params.id); // Crie um novo usuário
    if(!user){
      res.status(404).json({ error: 'Usuário não encontrado' }); // Retorne o novo usuário criado
    }
    user.username = req.body.username;
    user.email = req.body.email;
    await user.save();
    res.status(200).json(user); // Retorne o novo usuário criado
    
  } catch (error) {
    const emailNoUnique = error.parent.sqlState
    if(emailNoUnique){
      return res.status(409).json({ error: 'Email já existe' })
    }
    res.status(500).json({ error: 'Não foi possível editar esse usuário' });
  }
});

module.exports = router;