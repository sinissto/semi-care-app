import { Navbar } from "@/components/Navbar";

const Header = () => {
  return (
    <header
      className={
        "bg-white border-b border-slate-200 mx-auto max-w-8xl sticky top-0 z-50 backdrop-blur-md"
      }
    >
      {/* logo */}
      <Navbar className={"flex justify-center px-8"} />
    </header>
  );
};

export default Header;
