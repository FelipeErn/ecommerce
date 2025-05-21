import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// carrega as variaveis de ambiente do .env para o process.env (ja existe no node)
dotenv.config();

// configura o app para receber as funções do express
const app = express();

// configura o servidor para aceitar as tecnologias do cors e do json
app.use(cors());
app.use(express.json());

// cria a rota da home
app.get('/', (req: Request, res: Response) => {
  res.send('API funcionando!');
});

// verifica se a porta existe no env se não usa a 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
