function BreakdownCategories({ values }) {
  return (
    <section>
      <table>
        <caption>Breakdown Categories</caption>
        <thead>
          <tr>
            <th>category</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {values.map((v) => {
            const amountStyle: string = v.total < 10 ? "red" : "green";
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
      </table>
    </section>
  );
}

export default BreakdownCategories;
