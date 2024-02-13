import styled from "styled-components";

const Wrapper = styled.section`
  table {
    margin-top: 1rem;
    width: 100%;
    font-size: 1.15rem;
    line-height: 1.5;
    text-align: center;
  }
  thead {
    background-color: var(--primary-300);
  }

  caption {
    font-size: 1.5rem;
    font-weight: 500;
  }

  tbody tr:nth-child(even) {
    background-color: var(--grey-200);
  }
  tbody tr:hover {
    background-color: var(--primary-200);
  }

  .pie-chart {
    margin-top: 1rem;
    display: flex;
  }
`;

export default Wrapper;
