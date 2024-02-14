import Transaction from "./Transaction";
import Wrapper from "../assets/stylingWrappers/TransactionsTable.ts";

function TransactionsTable({ transactions }) {
  return (
    <Wrapper>
      <caption>Transactions</caption>
      <thead>
        <tr style={{ backgroundColor: "var(--primary-300)" }}>
          <th>Date</th>
          <th>Vendor</th>
          <th>Category</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <Transaction key={t._id} {...t} />
        ))}
      </tbody>
    </Wrapper>
  );
}

export default TransactionsTable;
