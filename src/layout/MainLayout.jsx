import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div>HEADER</div>

      <main>
        <Outlet />
      </main>

      <div>FOOTER</div>
    </div>
  );
};

export default MainLayout;
