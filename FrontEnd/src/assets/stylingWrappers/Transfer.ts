import styled from "styled-components";

const Wrapper = styled.section`
  .title {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1.75em;
  }

  form {
    padding: 1rem;
  }

  .form-row {
    margin: 1em;
    font-size: 1.25em;
  }

  label {
    display: inline-block;
    width: 25%;
  }

  input,
  select {
    padding: 0.15em 0.5em;
    width: 60%;
    height: 100%;
    font-size: 0.9em;
    font-family: var(--main-font);
    border: 1px solid var(--grey-500);
    border-radius: var(--border-radius);
  }

  input[name="amount"] {
    width: calc(60% - 1ch);
  }

  select:required:invalid {
    color: gray;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .btn {
    font-size: 1.2em;
    font-family: var(--main-font);
    font-weight: 600;
  }

  .deposit {
    color: var(--green-dark);
    background-color: var(--green-light);
  }

  .deposit:hover {
    color: var(--green-light);
    background-color: var(--green-dark);
  }

  .withdraw {
    color: var(--red-dark);
    background-color: var(--red-light);
  }

  .withdraw:hover {
    color: var(--red-light);
    background-color: var(--red-dark);
  }
`;

export default Wrapper;
