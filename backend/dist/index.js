"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// carrega as variaveis de ambiente do .env para o process.env (ja existe no node)
dotenv_1.default.config();
// configura o app para receber as funções do express
const app = (0, express_1.default)();
// configura o servidor para aceitar as tecnologias do cors e do json
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// cria a rota da home
app.get('/', (req, res) => {
    res.send('API funcionando!');
});
// verifica se a porta existe no env se não usa a 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
