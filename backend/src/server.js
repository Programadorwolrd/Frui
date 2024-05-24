import express from 'express';
import https from 'https';
import fs from 'fs';
const app = express();
// Middleware para analisar o corpo das solicitações como JSON ( necessario só copiar essa linha)
app.use(express.json());






//importa a rota e usa la em baixo
import vendedorRoutes from './routes/vendedorRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
// Rotas
app.use('/vendedores', vendedorRoutes);
app.use('/produtos', produtoRoutes);


const PORT = process.env.PORT || 3000;

const httpsOptions = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
};

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`HTTPS Server is running on port ${PORT}`);
});
