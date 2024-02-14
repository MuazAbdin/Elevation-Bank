import Wrapper from "../assets/stylingWrappers/TransactionsTable";

function BreakdownCategories({ values }) {
  return (
    <Wrapper>
      <caption>Breakdown Categories</caption>
      <thead>
        <tr style={{ backgroundColor: "var(--primary-300)" }}>
          <th>category</th>
          <th>amount</th>
        </tr>
      </thead>
      <tbody>
        {values.map((v) => {
          const amountStyle: string = v.total < 0 ? "red" : "green";
          return (
            <tr key={v._id}>
              <td>{v._id}</td>
              <td
                style={{
                  color: `var(--${amountStyle}-dark)`,
                  fontWeight: 600,
                }}
              >
                ${v.total}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Wrapper>
  );
}

export default BreakdownCategories;
