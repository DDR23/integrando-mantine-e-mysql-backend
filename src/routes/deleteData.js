const express = require('express');
const router = express.Router();
const userSchema = require('../schema/useSchema'); // Importe o esquema do usuário

// Rota para excluir um usuário por ID
router.delete('/apagar/:id', async (req, res) => {
  try {
    // Encontre o usuário pelo ID
    const user = await userSchema.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    // Exclua o usuário
    await user.destroy();
    res.status(200).json({ message: 'Usuário excluído com sucesso' });

  } catch (error) {
    res.status(500).json({ error: 'Não foi possível excluir esse usuário' });
  }
});

module.exports = router;