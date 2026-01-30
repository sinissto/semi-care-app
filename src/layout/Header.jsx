import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import MainNav from "../components/MainNav";

const Header = () => {
  return (
    <header className={"bg-primary-tint h-24 flex items-center justify-center"}>
      <div
        className={"max-w-7xl flex-1 flex items-center justify-between px-12"}
      >
        {/* logo */}
        <NavLink to={"/"}>
          <img src={logo} alt="SemiCare Logo" className={"h-18"} />
        </NavLink>

        {/* nav */}
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
