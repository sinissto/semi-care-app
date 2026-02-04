import { cn } from "@/lib/utils";

import { Logo, LogoImage, LogoText } from "@/components/shadcnblocks/logo";
import logoLarge from "@/assets/images/LogoLarge.png";
import { Link } from "react-router";

const FooterNav = ({
  // logo = {
  //   src: logoLarge,
  //   alt: "SemiCare Large Logo",
  //   title: "SemiCare",
  //   url: "/",
  // },

  className,
  // tagline = "Components made easy.",

  menuItems = [
    {
      title: "Services",
      links: [
        {
          text: "Peritoneal dialysis (CADP)",
          url: "/services/peritoneal-dialysis",
        },
        { text: "Basic Care", url: "/services/basic-care" },
        { text: "Treatment Care", url: "/services/treatment-care" },
        { text: "Domestic Services", url: "/services/domestic-care" },
        { text: "Respite Care", url: "/services/respite-care" },
        { text: "All Services", url: "/services" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Address:", url: "#" },
        { text: "Jolly Street 5", url: "#" },
        { text: "81545 Munich", url: "#" },
        { text: "--------------------------", url: "#" },
        { text: "Tel/Fax: 089 520 78 21", url: "#" },
        { text: "Mobile: 0178 531 49 98", url: "#" },
        { text: "--------------------------", url: "#" },
        { text: "Email: info@semi-care.de", url: "#" },
        { text: "--------------------------", url: "#" },
        { text: "Web: www.semi-care.de", url: "" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Documents", url: "#" },
        { text: "FQA", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],

  copyright = "© 2026 SemiCare. All rights reserved.",

  // bottomLinks = [
  //   { text: "Terms and Conditions", url: "#" },
  //   { text: "Privacy Policy", url: "#" },
  // ],
}) => {
  return (
    <div className={cn("py-32", className)}>
      <div className="container">
        <div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="h-full flex items-center gap-2 justify-center">
                {/*<Logo url="https://shadcnblocks.com">*/}
                {/*  <LogoImage*/}
                {/*    src={logo.src}*/}
                {/*    alt={logo.alt}*/}
                {/*    title={logo.title}*/}
                {/*    className="h-10 dark:invert"*/}
                {/*  />*/}
                {/*  <LogoText className="text-xl">{logo.title}</LogoText>*/}
                {/*</Logo>*/}
                <img
                  src={logoLarge}
                  alt={"SemiCare Large Logo"}
                  className={"w-[75%] h-auto rounded-2xl"}
                />
              </div>
              {/*<p className="mt-4 font-bold">{tagline}</p>*/}
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <Link to={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            {/*  <ul className="flex gap-4">*/}
            {/*    {bottomLinks.map((link, linkIdx) => (*/}
            {/*      <li key={linkIdx} className="underline hover:text-primary">*/}
            {/*        <a href={link.url}>{link.text}</a>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FooterNav };
