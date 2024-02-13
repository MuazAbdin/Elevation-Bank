import { Router } from "express";
import {
  addTransaction,
  deleteTransaction,
  getAllTransactions,
  getBreakdown,
} from "../controllers/transactionController.js";

const router = Router();

// Retrieving all the transactions.
router.get("/", getAllTransactions);

// Adding a transaction.
router.post("/", addTransaction);

// Deletion a transaction.
router.delete("/:transactionID", deleteTransaction);

// Getting a breakdown of the sum of transactions per category.
router.get("/breakdown", getBreakdown);

export default router;
