import express from "express";
import pratoController from "../controllers/pratoController.js";
const router = express.Router();

router.get("/", pratoController.getAll);
router.get("/:id", pratoController.getById);
router.post("/", pratoController.create);

export default router;