import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();


router.post('/cadastrar', async (req, res) => {
    const { nome, preco,quantidade } = req.body;

    try {
      const newProduto = await prisma.produto.create({
        data: {
          nome,
          preco,
          quantidade
        },
      });
  
      res.status(201).json(newProduto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  router.get('/', async (req, res) => {
    try {
        const produtos = await prisma.produto.findMany();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



export default router;