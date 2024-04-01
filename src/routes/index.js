const express = require('express');
const router = express.Router();

// Rota para obter todos os usuários
router.get('', async (req, res) => {
  try {
    res.status(200).send('<a href="/data">/data</a>');
    
  } catch (error) {
    res.status(500).send('Estamos enfrentando algum problema');
  }
});

module.exports = router;