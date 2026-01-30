import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header
      className={"bg-primary-tint h-24 flex items-center justify-between px-12"}
    >
      {/* logo */}
      <img src={logo} alt="SemiCare Logo" className={"h-18"} />

      {/* nav */}
      <nav className={""}>Navigation</nav>
    </header>
  );
};

export default Header;
