import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import TransactionsTable from "../components/TransactionsTable";
import useFetch from "../hooks/useFetch";
import { useLoaderData } from "react-router-dom";

function Current() {
  // const [transactions, setTransactions] = useState([]);
  // const [serverError, setServerError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const transactions = useLoaderData();

  function onDeleteTransaction(id: string) {
    // setTransactions((prev) => prev.filter((t) => t._id !== id));
  }

  // useEffect(() => {
  //   let ignore = false;
  //   (async function () {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch("http://localhost:3000/v1/transactions");
  //       if (!response.ok) throw new Error(response.statusText);
  //       const data = await response.json();
  //       if (!ignore) setTransactions(data);
  //     } catch (error) {
  //       if (!ignore) setServerError(error);
  //     } finally {
  //       if (!ignore) setIsLoading(false);
  //     }
  //   })();
  //   return () => (ignore = true);
  // }, []);
  // if (isLoading) return <div>Loading ...</div>;
  // if (serverError) return <div>{serverError}</div>;

  return (
    <>
      <PageHeader name="Muaz Abdin" balance={getBalance(transactions)} />
      <TransactionsTable
        transactions={transactions}
        onDeleteTransaction={onDeleteTransaction}
      />
      {/* {transactions && (
        <TransactionsTable
          transactions={transactions}
          onDeleteTransaction={onDeleteTransaction}
        />
      )} */}
    </>
  );
}

export default Current;

function getBalance(transactions) {
  if (!transactions) return 0;
  return transactions.reduce((sum, trans) => sum + trans.amount, 0);
}
