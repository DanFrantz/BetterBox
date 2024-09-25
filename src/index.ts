import express from 'express';

const app = express();
const PORT = 3000;

// Definindo um endpoint GET
app.get('/api/saudacao', (req, res) => {
    res.json({ message: 'Olá, mundo!' });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});



