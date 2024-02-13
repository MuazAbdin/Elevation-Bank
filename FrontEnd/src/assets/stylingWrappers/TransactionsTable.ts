import styled from "styled-components";

const Wrapper = styled.table`
  grid-area: content;
  font-size: 1.15rem;
  line-height: 1.5;
  text-align: center;

  caption {
    font-size: 1.5em;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: var(--grey-200);
  }
  tr:hover {
    background-color: var(--primary-200);
  }
`;

export default Wrapper;
