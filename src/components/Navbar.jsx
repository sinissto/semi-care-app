"use client";
import {
  Book,
  Menu,
  Sunset,
  Trees,
  Zap,
  Cross,
  HandHeart,
  MoveUpRightIcon,
  Syringe,
  BrushCleaning,
  Orbit,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, NavLink } from "react-router";
import semi_care_logo from "@/assets/images/logo.png";

const Navbar = ({
  logo = {
    url: "/",
    src: semi_care_logo,
    alt: "SamiCare Logo",
    title: "SamiCare",
  },

  menu = [
    // { title: "Home", url: "#" },
    {
      title: "Services",
      url: "/services",
      items: [
        {
          title: "Peritoneal Dialysis (CAPD)",
          description: "Providing comprehensive peritoneal dialysis care",
          icon: <Cross className="size-5 shrink-0" />,
          url: "/services/peritoneal-dialysis",
        },
        {
          title: "Basic care",
          description: "Offering essential healthcare services",
          icon: <Orbit className="size-5 shrink-0" />,
          url: "/services/basic-care",
        },
        {
          title: "Treatment care",
          description: "Medical treatment by nursing professionals at home",
          icon: <Syringe className="size-5 shrink-0" />,
          url: "/services/treatment-care",
        },
        {
          title: "Domestic services",
          description: "Assisting with daily household tasks and chores",
          icon: <BrushCleaning className="size-5 shrink-0" />,
          url: "/services/domestic-services",
        },
        {
          title: "Respite care",
          description:
            "Care for your loved ones, giving you a much-needed break",
          icon: <HandHeart className="size-5 shrink-0" />,
          url: "/services/respite-care",
        },
        {
          title: "All services",
          description:
            "All services we provide to make your life easier and better",
          icon: <MoveUpRightIcon className="size-5 shrink-0" />,
          url: "/services",
        },
      ],
    },
    {
      title: "Our Approach",
      url: "/our-approach",
      items: [
        {
          title: "Approach 1",
          description: "Description for Approach 1",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Approach 2",
          description: "Description for Approach 2",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Approach 3",
          description: "Description for Approach 3",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Approach 4",
          description: "Description for Approach 4",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    { title: "About Us", url: "/about-us" },
  ],

  navBtns = {
    contact: { title: "Contact us", url: "/contact" },
  },

  className,
}) => {
  return (
    <section className={cn("py-4", className)}>
      <div className="container ">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between gap-8 lg:flex">
          {/* LOGO */}
          <div className="w-full flex items-center gap-8">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-12 dark:invert"
                alt={logo.alt}
              />
              <span className="text-2xl text-primary  tracking-tighter font-bold">
                {logo.title}
              </span>
            </Link>

            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className={"gap-4"}>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex">
            <Button
              asChild
              size="sm"
              className={"bg-primary text-lg font-normal hover:bg-pink-600"}
            >
              <Link to={navBtns.contact.url}>{navBtns.contact.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-12 dark:invert"
                alt={logo.alt}
              />
              <span className="text-2xl text-primary  tracking-tighter font-bold">
                {logo.title}
              </span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={"bg-transparent border-none"}
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-12 dark:invert"
                        alt={logo.alt}
                      />
                      <span className="text-2xl text-primary  tracking-tighter font-bold">
                        {logo.title}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      className={
                        "bg-primary text-lg font-normal hover:bg-pink-600"
                      }
                    >
                      <Link to={navBtns.contact.url}>
                        {navBtns.contact.title}
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className={"bg-transparent text-lg"}>
          <NavLink
            to={item.url}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {item.title}
          </NavLink>
        </NavigationMenuTrigger>

        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80 ">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  // const className =
  //   "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-muted hover:text-accent-foreground";

  return (
    <NavigationMenuItem key={item.title}>
      <NavLink
        to={"/about-us"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        <NavigationMenuLink>{item.title}</NavigationMenuLink>
      </NavLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }) => {
  return (
    <Link
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-pink-200 hover:text-accent-foreground"
      to={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
