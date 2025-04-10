import express from "express"; // Importando o express
import pratoRoutes from "./routes/pratoRoutes.js"; // Importando as rotas de pratos

const app = express(); 
const serverPort = process.env.PORT || 3000; // Definindo a porta do servidor

app.use(express.json());
app.use("/dishes", pratoRoutes); // Definindo a rota base para as rotas de pratos

app.listen(serverPort, () => {
  console.log(`Servidor rodando na porta ${serverPort}`); 
});
