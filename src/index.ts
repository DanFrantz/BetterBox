/*import express from 'express';

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
*/
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  }
  
  
main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })





