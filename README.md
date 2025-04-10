# Gerenciador de Cardápio (Pratos)

## Sobre o Projeto
Este projeto é uma aplicação para gerenciamento de cardápio, permitindo a criação, edição e consulta de pratos. Abaixo estão as instruções para instalação, execução e detalhes técnicos.

---

## Instalação e Execução

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/ativ-cardapio.git
    cd ativ-cardapio
    ```

2. **Instale as dependências**:
    Certifique-se de ter o [Node.js](https://nodejs.org/) instalado e instale junto o express.
    ```bash
    npm install express
    ```

3. **Configure o ambiente**:
    Crie um arquivo `.env` com as variáveis necessárias (exemplo no arquivo `.env.example`).

    3.1 **Configure o Prisma**:  
        Instale e Inicialize o Prisma no projeto:  
        
        - npm install prisma @prisma/client 
        - npx prisma init
          
        Isso criará um diretório `prisma/` com os arquivos de configuração necessários.  

        Em seguida, configure o arquivo `prisma/schema.prisma` para definir o modelo do banco de dados. Por exemplo:  
        ```prisma

        generator client {
        provider = "prisma-client-js"
        }

        datasource db {
        provider = "sqlite"
        url      = env("DATABASE_URL")
        }

        model name {
            id        Int     @id @default(autoincrement()) @unique
            name     String
            description String 
            price String 
            category String
            ingredients String
            imageUrl String ?
            prepTime String
            updatedAdt DateTime @updatedAt
            createdAt  DateTime @default(now()) 
        }
            @@map("name")

        ```  

        Após configurar o modelo, execute a migração para criar as tabelas no banco de dados:  
        ```bash
        npx prisma migrate dev --name init
        ```  

        Por fim, configure o Prisma Client (client.js) para interagir com o banco de dados no código:  
        ```javascript
        import { PrismaClient } from '@prisma/client';

        const prisma = new PrismaClient();

        export default prisma;
        ```

4. **Execute o projeto**:
    ```bash
    npm run dev
    ```

5. Acesse a aplicação em: `http://localhost:{port}`.

---

## Exemplos de Requisições

### **GET /dishes**
Retorna todos os itens do cardápio.
```bash
curl -X GET http://localhost:3000/dishes
```
### **GET /dishes/:id**
Retorna os detalhes de um item específico do cardápio com base no seu ID.
```bash
curl -X GET http://localhost:3000/dishes/1
```
**Resposta de exemplo**:
```json
{
    "id": 1,
    "name": "Pizza",
    "description": "Pizza de calabresa com borda recheada",
    ...
}
```

### **POST /dishes**
Adiciona um novo item ao cardápio.
```bash
curl -X POST http://localhost:3000/dishes \
-H "Content-Type: application/json" \
-d '{"name": "Pizza", "preco": "R$77,00" ...}'
```

### **PUT /dishes/:id**
Atualiza um item existente.
```bash
curl -X PUT http://localhost:3000/dishes/1 \
-H "Content-Type: application/json" \
-d '{"name": "Pizza Grande", "preco": "R$300,00" ...}'
```

### **DELETE /dishes/:id**
Remove um item do cardápio.
```bash
curl -X DELETE http://localhost:3000/dishes/1
```

---

## Decisões de Design e Arquitetura

- **Model-Controller-Routes**: A aplicação foi estruturada seguindo o padrão Model-Controller-Routes, separando as responsabilidades de manipulação de dados (Model), lógica de negócios (Controller) e rotas de acesso (Routes) para facilitar a manutenção e escalabilidade do projeto.
- **Banco de Dados**: Utilizado um banco de dados relacional para armazenar os itens do cardápio.
- **Validação**: Implementada validação de dados no backend para garantir a integridade das informações.

---

## Tecnologias Utilizadas

- **Node.js**: ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) Plataforma para execução do JavaScript no backend.
- **Express.js**: ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) Framework para criação de APIs RESTful.
- **SQLite**: ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white) Banco de dados leve e eficiente.
- **Prisma**: ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ORM utilizado para manipulação do banco de dados de forma eficiente e segura.
- **dotenv**: ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black) Gerenciamento de variáveis de ambiente.
- **Postman**: ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red) Ferramenta para testes de API.

- **Git**: ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) Controle de versão do código fonte.

---

## Contribua com o Projeto

Se você gostou deste projeto, considere dar uma estrela no repositório! Isso ajuda a divulgar o projeto e motiva o desenvolvimento de novas funcionalidades. 🌟



