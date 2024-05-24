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















export default router;