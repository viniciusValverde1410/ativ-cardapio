import express from "express";
import pratoController from "../controllers/pratoController.js"; // Importando o controlador de pratos
const router = express.Router();

router.get("/", pratoController.getAll); // Rota para obter todos os pratos
router.get("/:id", pratoController.getById); // Rota para obter um prato específico pelo ID
router.post("/", pratoController.create); // Rota para criar um novo prato
router.put("/:id", pratoController.update); // Rota para atualizar um prato existente pelo ID
router.delete("/:id", pratoController.delete); // Rota para deletar um prato existente pelo ID

export default router;