const request = require('supertest');
const express = require('express');
const vendedorRoutes = require('../src/routes/vendedorRoutes'); // Ajuste o caminho conforme necessário

const app = express();
app.use(express.json());
app.use('/vendedores', vendedorRoutes);

describe('POST /vendedores', () => {
  it('should create a new vendedor and return 201 status code', async () => {
    const res = await request(app)
      .post('/vendedores')
      .send({
        nome: 'Nome do Vendedor',
        cpf: '12345678901'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.nome).toEqual('Nome do Vendedor');
    expect(res.body.cpf).toEqual('12345678901');
  });
});