import express from 'express';
import {PORT,HOST} from './config.js';
import cors from 'cors';
const app = express();
// Middleware para analisar o corpo das solicitações como JSON ( necessario só copiar essa linha)
app.use(express.json());
app.use(cors());






//importa a rota e usa la em baixo
import vendedorRoutes from './routes/vendedorRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
// Rotas
app.use('/vendedores', vendedorRoutes);
app.use('/produtos', produtoRoutes);



app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})