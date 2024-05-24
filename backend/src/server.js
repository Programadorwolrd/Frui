import express from 'express';
const app = express();
// Middleware para analisar o corpo das solicitações como JSON ( necessario só copiar essa linha)
app.use(express.json());






//importa a rota e usa la em baixo
import vendedorRoutes from './routes/vendedorRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
// Rotas
app.use('/vendedores', vendedorRoutes);
app.use('/produtos', produtoRoutes);


//aqui eu informo a porta do servodpr e uma alternativa caso nao tenha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});