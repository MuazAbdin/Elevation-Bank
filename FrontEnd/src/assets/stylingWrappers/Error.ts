import styled from "styled-components";

const Wrapper = styled.section`
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  font-size: 5rem;
  gap: 2.5rem;
  font-weight: 700;
  color: var(--primary-600);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    gap: 1.5rem;
    text-shadow: 2px 2px 5px;
  }
`;

export default Wrapper;
