import { createBrowserRouter } from "react-router-dom";
import {
  DashboardLayout,
  HomeLayout,
  Landing,
  Current,
  Transfer,
  Loan,
  Breakdown,
} from "../pages";

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
        children: [
          {
            index: true,
            element: <Current />,
            loader: async () => {
              const response = await fetch(
                "http://localhost:3000/v1/transactions"
              );
              if (!response.ok) throw new Error(response.statusText);
              return await response.json();
            },
          },
          { path: "transfer", element: <Transfer /> },
          { path: "loan", element: <Loan /> },
          { path: "breakdown", element: <Breakdown /> },
        ],
      },
    ],
  },
]);

export default router;
