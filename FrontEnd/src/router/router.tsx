import { createBrowserRouter } from "react-router-dom";
import {
  DashboardLayout,
  HomeLayout,
  Landing,
  Current,
  Transfer,
  Loan,
  Breakdown,
  Error,
} from "../pages";
import {
  loader as transactoinsLoader,
  action as deleteTransactionAction,
} from "../pages/Current";
import { loader as breakdownLoader } from "../pages/Breakdown";
import { action as trasferAction } from "../pages/Transfer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        action: deleteTransactionAction,
        children: [
          {
            index: true,
            element: <Current />,
            errorElement: <Error />,
            loader: transactoinsLoader,
          },
          {
            path: "transfer",
            element: <Transfer />,
            loader: transactoinsLoader,
            action: trasferAction,
          },
          { path: "loan", element: <Loan /> },
          {
            path: "breakdown",
            element: <Breakdown />,
            errorElement: <Error />,
            loader: breakdownLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
