import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Wrapper from "../assets/stylingWrappers/MainHeader.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function MainHeader() {
  return (
    <Wrapper>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="Bank Logo" />
          <span> Bank</span>
        </div>
      </Link>
      <nav>
        <menu>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <Link to="/">Branches</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <Link to="/">Contact Us</Link>
          </li>
        </menu>
      </nav>
    </Wrapper>
  );
}

export default MainHeader;
