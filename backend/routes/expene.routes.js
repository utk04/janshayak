// routes/expense.routes.js
import express from "express";
import {
  addExpense,
  getExpenses,
  getExpenseStats,
  deleteExpense,
} from "../controllers/expense.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, addExpense);
router.get("/", protectRoute, getExpenses);
router.get("/stats", protectRoute, getExpenseStats);
router.delete("/:id", protectRoute, deleteExpense);

export default router;