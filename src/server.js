import express from "express";
import pratoRoutes from "./routes/pratoRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/dishes", pratoRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
