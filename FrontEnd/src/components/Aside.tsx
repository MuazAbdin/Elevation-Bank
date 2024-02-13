import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faChartPie,
  faMoneyBillTransfer,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

function Aside() {
  return (
    <aside>
      <nav>
        <menu>
          <li>
            <Link to="">
              <FontAwesomeIcon icon={faBuildingColumns} />
              <span>current</span>
            </Link>
          </li>
          <li>
            <Link to="transfer">
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              <span>transfer</span>
            </Link>
          </li>
          <li>
            <Link to="loan">
              <FontAwesomeIcon icon={faHandHoldingDollar} />
              <span>loan</span>
            </Link>
          </li>
          <li>
            <Link to="breakdown">
              <FontAwesomeIcon icon={faChartPie} />
              <span>breakdown</span>
            </Link>
          </li>
        </menu>
      </nav>
    </aside>
  );
}

export default Aside;
