import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();


router.post('/cadastrar', async (req, res) => {
  const { nome, cpf } = req.body;

  try {
    // Verificar se o cpf já existe
    const existingVendedor = await prisma.vendedor.findUnique({ where: { cpf } });

    if (existingVendedor) {
      return res.status(400).json({ error: 'CPF já existe' });
    }

    const newVendedor = await prisma.vendedor.create({
      data: {
        nome,
        cpf,
      },
    });

    res.status(201).json(newVendedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const vendedores = await prisma.vendedor.findMany();

    res.status(200).json(vendedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/delete', async (req, res) => {
  try {
    await prisma.vendedor.deleteMany({});
    res.status(200).json({ message: "Todos os vendedores foram deletados" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//ROTA DESATIVADA POIS NAO QUERO OPÇÃO DE ATUALIZAR VENDEDOR
// router.put('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const { cpf } = req.body;

//   try {
//     const vendedor = await prisma.vendedor.update({
//       where: { id: Number(id) },
//       data: { cpf: cpf },
//     });

//     res.status(200).json({ message: "Vendedor atualizado com sucesso", vendedor });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });







export default router;