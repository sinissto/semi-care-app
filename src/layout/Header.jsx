import { Navbar1 } from "@/components/navbar1";

const Header = () => {
  return (
    <header
      className={
        "bg-linear-to-b from-primary/50 to-primary-tint mx-auto max-w-8xl sticky top-0 z-50 backdrop-blur-md"
      }
    >
      {/* logo */}
      <Navbar1 className={"flex justify-center px-8"} />
    </header>
  );
};

export default Header;
