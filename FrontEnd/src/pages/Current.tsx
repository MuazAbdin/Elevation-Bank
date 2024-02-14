import PageHeader from "../components/PageHeader";
import TransactionsTable from "../components/TransactionsTable";
import { redirect, useLoaderData } from "react-router-dom";

function Current() {
  const transactions = useLoaderData();
  return (
    <>
      <PageHeader name="Muaz Abdin" balance={getBalance(transactions)} />
      <TransactionsTable transactions={transactions} />
    </>
  );
}

export default Current;

function getBalance(transactions) {
  if (!transactions) return 0;
  return transactions.reduce((sum, trans) => sum + trans.amount, 0);
}

export async function loader() {
  const response = await fetch("http://localhost:3000/v1/transactions");
  if (!response.ok) throw response;
  return response;
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get("_id");
  const response = await fetch(`http://localhost:3000/v1/transactions/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw response;
  return redirect("/dashboard");
}
