import Wrapper from "../assets/stylingWrappers/Transfer.ts";
import PageHeader from "../components/PageHeader.tsx";
import TransferForm from "../components/TransferForm.tsx";
import useFetch from "../hooks/useFetch.ts";

function getBalance(transactions) {
  if (!transactions) return 0;
  return transactions.reduce((sum, trans) => sum + trans.amount, 0);
}

function Transfer() {
  const [apiData, serverError, isLoading] = useFetch(
    "http://localhost:3000/v1/transactions"
  );

  if (isLoading) return <div>Loading ...</div>;
  if (serverError) return <div>{serverError}</div>;

  return (
    <Wrapper>
      <PageHeader name="Muaz Abdin" balance={getBalance(apiData)} />
      <h3 className="title">Transfer</h3>
      <TransferForm />
    </Wrapper>
  );
}

export default Transfer;
