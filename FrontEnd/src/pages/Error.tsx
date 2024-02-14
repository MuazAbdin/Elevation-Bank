import { useRouteError } from "react-router-dom";
import Wrapper from "../assets/stylingWrappers/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faTriangleExclamation} />
      <div>
        <h1>{error.status}</h1>
        <span>{error.statusText}</span>
      </div>
    </Wrapper>
  );
}

export default Error;
