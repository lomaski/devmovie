import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";

function DefaultLayout({ children }) {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  );
}

export default DefaultLayout;