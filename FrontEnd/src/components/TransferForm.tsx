import { FormEvent, useRef } from "react";
import { CATEGORIES } from "../pages";
import { useNavigate } from "react-router-dom";

function TransferForm() {
  const navigate = useNavigate();
  const submitButton = useRef("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = getTransactionData(fd, submitButton.current);
    event.currentTarget.reset();
    await addTransaction(data);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="category">Category: </label>
        <select id="category" name="category" required>
          <option value="" disabled>
            Choose category ...
          </option>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.name} color={c.color}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="vendor">Vendor: </label>
        <input
          type="text"
          id="vendor"
          name="vendor"
          placeholder="Insert vendor name"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="amount">Amount:</label>
        <span>$</span>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Insert amount"
          required
        />
      </div>
      <div className="buttons">
        <button
          className="btn deposit"
          name="deposit"
          onClick={() => (submitButton.current = "deposit")}
        >
          deposit
        </button>
        <button
          className="btn withdraw"
          name="withdraw"
          onClick={() => (submitButton.current = "withdraw")}
        >
          withdraw
        </button>
      </div>
    </form>
  );
}

export default TransferForm;

async function addTransaction(data: any) {
  const response = await fetch("http://localhost:3000/v1/transactions", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) throw response;

  const resData = await response.json();
  return resData;
}

function getTransactionData(formData: FormData, transactionType: string) {
  const data = Object.fromEntries(formData.entries());
  data.amount = parseInt(data.amount);
  if (transactionType === "withdraw") data.amount *= -1;
  return data;
}
