import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h3 className="text-3xl">Main layout</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
