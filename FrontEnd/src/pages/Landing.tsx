import { Link } from "react-router-dom";
import Wrapper from "../assets/stylingWrappers/Landing.ts";

function Landing() {
  return (
    <Wrapper>
      <h1>
        Welcome to <strong>Elevation Bank</strong>
      </h1>
      <p>
        We're thrilled to have you here, ready to embark on a seamless and
        convenient banking journey with us. Our web application is designed with
        your needs in mind, offering a suite of features to manage your finances
        effectively, securely, and effortlessly.
      </p>
      <button className="btn btn-block">
        <Link to="dashboard">Enter</Link>
      </button>
    </Wrapper>
  );
}

export default Landing;
