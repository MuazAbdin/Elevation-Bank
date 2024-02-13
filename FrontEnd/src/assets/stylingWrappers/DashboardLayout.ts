import styled from "styled-components";

const Wrapper = styled.main`
  padding: 1rem;
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "aside header"
    "aside content";
  justify-items: stretch;
  align-items: flex-start;

  aside {
    grid-area: aside;
  }

  menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-size: 1.25em;
    text-transform: capitalize;
  }

  li {
    cursor: pointer;
    color: var(--primary-400);
    border-bottom: 1px dashed black;
    padding: 0.5em;
  }

  li span {
    margin-left: 0.75em;
  }

  li:hover {
    background-color: var(--primary-200);
  }

  header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25em;
    color: var(--primary-600);
  }

  a:visited {
    text-decoration: none;
    color: var(--primary-400);
  }
`;

export default Wrapper;
