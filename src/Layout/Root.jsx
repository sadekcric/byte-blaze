import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Footer from "../Pages/Footer";

const Root = () => {
  return (
    <div>
      <div className="">
        <Nav />
        <div className="min-h-[calc(100vh-116px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
