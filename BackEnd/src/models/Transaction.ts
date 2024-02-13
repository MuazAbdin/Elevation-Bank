import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    amount: { type: Number, required: true },
    vendor: { type: String, lowercase: true, trim: true, required: true },
    category: { type: String, lowercase: true, trim: true, required: true },
  },
  { timestamps: true }
);

export default model("Transaction", transactionSchema);
