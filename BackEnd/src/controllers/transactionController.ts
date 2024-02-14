import Transaction from "../models/Transaction.js";
import { Request, Response } from "express";

function getErrorMessage(error: any): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

interface IPostTransactionBody {
  amount: number;
  vendor: string;
  category: string;
}

interface IDeleteTransactionBody {
  transactionID: string;
}

export async function getAllTransactions(req: Request, res: Response) {
  try {
    const transactions = await Transaction.find();
    res.send(transactions);
  } catch (error) {
    const message = getErrorMessage(error);
    res.status(400).send({ msg: message });
  }
}

const MIN_BALANCE = 500;

export async function addTransaction(req: Request, res: Response) {
  try {
    const data = req.body as IPostTransactionBody;
    if (data.amount < 0) {
      const transactions = await Transaction.aggregate([
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ]);
      const total = transactions[0].total;

      if (total < MIN_BALANCE) {
        return res.status(403).send({
          message: "insufficient balance",
          balance: MIN_BALANCE,
        });
      }
    }

    const newTransaction = new Transaction(data);
    await newTransaction.save();
    res.status(201).send(newTransaction);
  } catch (error) {
    const message = getErrorMessage(error);
    res.status(400).send({ msg: message });
  }
}

export async function deleteTransaction(req: Request, res: Response) {
  try {
    const data = req.params as unknown as IDeleteTransactionBody;
    const transactionID = data.transactionID;
    const deletedTransaction = await Transaction.findOneAndDelete({
      _id: transactionID,
    });
    if (!deletedTransaction)
      return res.status(404).send({ msg: "resource not found" });
    res.send(deletedTransaction);
  } catch (error) {
    const message = getErrorMessage(error);
    res.status(400).send({ msg: message });
  }
}

export async function getBreakdown(req: Request, res: Response) {
  try {
    const breakdown = await Transaction.aggregate([
      { $group: { _id: "$category", total: { $sum: "$amount" } } },
    ]);
    res.send(breakdown);
  } catch (error) {
    const message = getErrorMessage(error);
    res.status(400).send({ msg: message });
  }
}
