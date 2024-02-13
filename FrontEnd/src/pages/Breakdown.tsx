import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Wrapper from "../assets/stylingWrappers/Breakdown.ts";
import { ITransaction } from "../models/context.ts";
import { CATEGORIES } from "./index.ts";
import BreakdownCategories from "../components/BreakdownCategories.tsx";
import useFetch from "../hooks/useFetch.ts";
import PageHeader from "../components/PageHeader.tsx";

const sizing = {
  margin: { right: 5 },
  width: 300,
  height: 300,
  legend: { hidden: false },
};

function Breakdown() {
  const [apiData, serverError, isLoading] = useFetch(
    "http://localhost:3000/v1/transactions/breakdown"
  );
  if (isLoading) return <div>Loading ...</div>;
  if (serverError) return <div>{serverError}</div>;
  if (!apiData) return <div>Loading ...</div>;

  const data = apiData.map((category) => {
    return {
      label: category._id,
      value: Math.abs(category.total),
      color: CATEGORIES.find(
        (c) => c.name.toLowerCase() === category._id.toLowerCase()
      )!.color,
    };
  });

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <Wrapper>
      <PageHeader
        name="Muaz Abdin"
        balance={apiData.reduce((a, b) => a + b.total, 0)}
      />
      <BreakdownCategories values={apiData} />
      {/* <div className="pie-chart">
        <PieChart
          series={[
            {
              outerRadius: 100,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 14,
            },
          }}
          {...sizing}
        />
      </div> */}
    </Wrapper>
  );
}

export default Breakdown;
