// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Rota para listar todos os usuários
router.get('/', (req, res) => {
  // Lógica para listar todos os usuários
  res.send('Listagem de todos os usuários');
});

// Rota para obter um usuário pelo ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para obter o usuário pelo ID
  res.send(`Detalhes do usuário com ID ${userId}`);
});

// Rota para criar um novo usuário
router.post('/', (req, res) => {
  // Lógica para criar um novo usuário
  res.send('Novo usuário criado com sucesso');
});

// Rota para atualizar um usuário existente
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para atualizar o usuário com o ID fornecido
  res.send(`Usuário com ID ${userId} atualizado com sucesso`);
});

// Rota para excluir um usuário
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para excluir o usuário com o ID fornecido
  res.send(`Usuário com ID ${userId} excluído com sucesso`);
});

module.exports = router;
