import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ITransaction } from "../models/context";

function getDate(date: Date): string {
  const month = date.getUTCMonth() + 1; // months from 1-12
  const day = date.getUTCDate();
  return `${day}/${month}`;
}

function Transaction({
  _id,
  createdAt,
  vendor,
  category,
  amount,
  onDeleteTransaction,
}: ITransaction) {
  const amountStyle: string = amount < 10 ? "red" : "green";

  async function handleDelete(id: string) {
    await deleteTransaction(id);
    onDeleteTransaction(id);
  }

  return (
    <tr>
      <td>{getDate(new Date(createdAt))}</td>
      <td>{vendor}</td>
      <td>{category}</td>
      <td
        style={{
          color: `var(--${amountStyle}-dark)`,
          fontWeight: 600,
        }}
      >
        ${amount}
      </td>
      <td
        style={{ color: "var(--red-dark)", cursor: "pointer" }}
        onClick={() => handleDelete(_id)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </td>
    </tr>
  );
}

export default Transaction;

async function deleteTransaction(id: string) {
  const response = await fetch(`http://localhost:3000/v1/transactions/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw response;
  const resData = await response.json();
  console.log(resData);
  return resData;
}
