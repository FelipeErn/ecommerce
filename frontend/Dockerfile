# imagem base oficial do Node (versão LTS)
FROM node:18-alpine

# diretório de trabalho dentro do container
WORKDIR /app

# copia os arquivos de dependências
COPY package*.json ./

# instala dependências
RUN npm install

# copia o restante do código
COPY . .

# build do Next.js (gera os arquivos otimizados)
RUN npm run build

# expõe a porta padrão do Next.js
EXPOSE 3000

# comando para iniciar a aplicação em modo produção
CMD ["npm", "start"]
