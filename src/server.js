import express from "express";
import pratoRoutes from "./routes/pratoRoutes.js";

const app = express();
const serverPort = process.env.PORT || 3000;

app.use(express.json());
app.use("/dishes", pratoRoutes);

app.listen(serverPort, () => {
  console.log(`Servidor rodando na porta ${serverPort}`);
});
