import { Router } from "express";
import {
  createTodo,
  deleteTodos,
  getTodos,
  updateTodos,
} from "../controllers/todo";

const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:id", updateTodos);
router.delete("/:id", deleteTodos);

export default router;
