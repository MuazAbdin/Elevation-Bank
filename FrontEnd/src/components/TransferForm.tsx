import { CATEGORIES } from "../pages";
import { Form, useNavigation } from "react-router-dom";

function TransferForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="POST">
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
      {/* <div className="form-row">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Insert date"
          required
        />
      </div> */}
      <div className="buttons">
        <button className="btn deposit" name="deposit" disabled={isSubmitting}>
          deposit
        </button>
        <button
          className="btn withdraw"
          name="withdraw"
          disabled={isSubmitting}
        >
          withdraw
        </button>
      </div>
    </Form>
  );
}

export default TransferForm;
