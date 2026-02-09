import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

import heroImg from "@/assets/images/hero.png";

const AboutUsHero = ({
  // badge = "Your Website Builder",
  heading = "Home care - because home is where the heart is",
  description = "Quality-assured home care and medical services in accordance with\n" +
    "            recognized healthcare standards. Focuses on safety, reliability, and\n" +
    "            preserving independence, while supporting families through clear\n" +
    "            communication and trusted care.",

  buttons = {
    primary: {
      text: "Contact Us",
      url: "/contact",
    },
    secondary: {
      text: "About Us",
      url: "/about",
    },
  },

  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "HeroOLD section demo image showing interface components",
  },

  className,
}) => {
  return (
    <div
      className={cn("bg-primary-tint px-8 py-32 mx-auto max-w-8xl", className)}
    >
      <div className="container mx-auto">
        <div className="grid items-center justify-items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="gap-5 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl/[1.05] text-grey-primary font-primary font-bold -tracking-[0.5px] mb-8 lg:text-6xl">
              {heading}
            </h1>
            <p className="max-w-xl text-xl/normal text-grey-primary mb-4 lg:text-xl ">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <Link
                    to={buttons.primary.url}
                    className={
                      "text-xl bg-primary text-white inline-block py-4 px-8 rounded-md mr-4 hover:bg-primary-shade active:scale-[0.98] transition-colors duration-300"
                    }
                  >
                    {buttons.primary.text}
                  </Link>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto ">
                  <Link
                    to={buttons.secondary.url}
                    className={
                      "text-xl bg-primary-tint text-grey-primary inline-block py-4 px-8 rounded-md hover:bg-primary-tint hover:inset-ring-3 hover:inset-ring-white active:scale-[0.98] transition-colors duration-300"
                    }
                  >
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <img
            src={heroImg}
            alt={image.alt}
            className="w-[91%] h-auto rounded-[20%] object-contain  order-1 lg:order-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
