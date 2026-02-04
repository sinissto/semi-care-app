import { Outlet } from "react-router";
import Header from "./Header";
import FooterOLD from "./Footer-OLD";
import { FooterNav } from "@/components/FooterNav";
import Footer from "@/layout/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
