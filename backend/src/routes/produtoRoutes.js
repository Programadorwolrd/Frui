import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();


router.post('/cadastrar', async (req, res) => {
    const { nome, preco } = req.body;

    try {
      const newProduto = await prisma.produto.create({
        data: {
          nome,
          preco,
        },
      });
  
      res.status(201).json(newProduto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  router.post('/', async (req, res) => {
    const { nome, preco } = req.body;
  
    try {
      const newProduto = await prisma.produto.create({
        data: {
          nome,
          preco,
        },
      });
  
      res.status(201).json(newProduto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });




export default router;