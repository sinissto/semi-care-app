import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const navItems = [
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const navLinkStyles = ({ isActive }) =>
  isActive
    ? "px-6 py-2 border-b-4 border-b-primary uppercase"
    : `px-6 py-2 hover:border-b-4 hover:border-b-primary/50 uppercase`;

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav className="px-4 py-3" aria-label="Main navigation">
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={navLinkStyles}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <div className="z-60 relative">
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {/* Hamburger / Close icon */}
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-primary transition ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <div
          id="mobile-menu"
          className="md:hidden mt-4 bg-primary-tint overflow-y-hidden fixed z-50 top-0 left-0 right-0 bottom-0 w-screen min-h-screen flex items-center justify-center duration-300 ease-in"
        >
          <ul className="flex flex-col items-center justify-center gap-6">
            <li>
              <NavLink
                to={"/"}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block  px-4 py-1 text-lg font-semibold uppercase ${
                    isActive ? "font-semibold border-b-4 border-b-primary" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block  px-4 py-1 text-lg font-semibold uppercase ${
                      isActive
                        ? "font-semibold border-b-4 border-b-primary"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          id="mobile-menu"
          className="md:hidden mt-4 bg-primary-tint overflow-y-hidden fixed z-50 top-0 left-[-150%] right-0 bottom-0 w-screen min-h-screen flex items-center justify-center duration-300 ease-in"
        >
          <ul className="flex flex-col items-center justify-center gap-6">
            <li>
              <NavLink
                to={"/"}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block  px-4 py-1 text-lg font-semibold uppercase ${
                    isActive ? "font-semibold border-b-4 border-b-primary" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block  px-4 py-1 text-lg uppercase ${
                      isActive
                        ? "font-semibold border-b-4 border-b-primary"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
