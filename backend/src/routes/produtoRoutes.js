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

// Rota para deletar todos os produtos
router.delete('/deleteAll', async (req, res) => {
  try {
    await prisma.produto.deleteMany();
    res.status(200).json({ message: "Todos os produtos foram deletados com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.delete('/deleteAll', async (req, res) => {
  try {
    await prisma.produto.deleteMany();

    res.status(200).json({ message: "Todos os produtos foram deletados com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um produto
// router.put('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const { nome, preco, foto } = req.body;

//   try {
//     const produto = await prisma.produto.update({
//       where: { id: Number(id) },
//       data: { nome: nome, preco: preco, foto: foto },
//     });

//     res.status(200).json({ message: "Produto atualizado com sucesso", produto });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });








export default router;