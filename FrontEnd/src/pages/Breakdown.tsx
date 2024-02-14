import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/stylingWrappers/Breakdown.ts";
import BreakdownCategories from "../components/BreakdownCategories.tsx";
import PageHeader from "../components/PageHeader.tsx";

interface IBreakdownSection {
  _id: string;
  total: number;
}

function Breakdown() {
  const breakdownData = useLoaderData() as IBreakdownSection[];
  return (
    <>
      <PageHeader
        name="Muaz Abdin"
        balance={breakdownData.reduce(
          (a: number, b: IBreakdownSection) => a + b.total,
          0
        )}
      />
      <BreakdownCategories values={breakdownData} />
    </>
  );
}

export default Breakdown;

export async function loader() {
  const response = await fetch(
    "http://localhost:3000/v1/transactions/breakdown"
  );
  if (!response.ok) throw response;
  return response;
}
