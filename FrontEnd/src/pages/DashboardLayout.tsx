import { Outlet } from "react-router-dom";
import Wrapper from "../assets/stylingWrappers/DashboardLayout.ts";
import Aside from "../components/Aside.tsx";

function DashboardLayout() {
  return (
    <Wrapper>
      <Aside />
      <Outlet />
    </Wrapper>
  );
}

export default DashboardLayout;
