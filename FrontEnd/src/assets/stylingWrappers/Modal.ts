import styled from "styled-components";

const Wrapper = styled.section`
  font-family: var(--main-font);
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  grid-template-areas:
    "icon title title"
    "icon message message"
    ". . btn";
  align-items: end;
  gap: 0.5em 1em;

  @keyframes slide-down-fade-in {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-up-fade-in {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    grid-area: title;
    text-transform: uppercase;
    color: darkred;
  }

  svg {
    grid-area: icon;
    font-size: 3em;
    color: darkred;
  }

  p {
    grid-area: message;
    font-size: 1.15rem;
  }

  button {
    grid-area: btn;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: var(--main-font);
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: darkred;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    color: #fff;
  }

  button:hover {
    background-color: #3e0505;
  }
`;

export default Wrapper;
