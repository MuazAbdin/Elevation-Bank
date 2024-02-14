import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigation, useSubmit } from "react-router-dom";

function getDate(date: Date): string {
  const month = date.getUTCMonth() + 1; // months from 1-12
  const day = date.getUTCDate();
  return `${day}/${month}`;
}

function Transaction(props) {
  const { _id, createdAt, vendor, category, amount } = props;
  const amountStyle: string = amount < 0 ? "red" : "green";
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  async function handleDelete() {
    if (isSubmitting) return;
    const proceed = window.confirm("Are you sure?");
    if (!proceed) return;
    submit(
      { _id },
      {
        method: "DELETE",
        action: "/dashboard",
      }
    );
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
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </td>
    </tr>
  );
}

export default Transaction;
