import Section from "@/layout/Section";

import {
  PhoneIcon,
  TabletSmartphone,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  { icon: <PhoneIcon />, title: "Tel / Fax", description: "089 520 78 21" },
  {
    icon: <TabletSmartphone />,
    title: "Mobile",
    description: "0178 531 49 98",
  },
  { icon: <MailIcon />, title: "Email", description: "info@semi-care.de" },
  {
    icon: <MapPinIcon />,
    title: "Address",
    description: "Jolly Street 5, 81545 Munich",
  },
];

const ContactPage = () => {
  return (
    <Section className={"bg-primary-tint rounded-b-2xl"}>
      <div className="container mx-auto">
        <div className={"flex flex-col md:flex-row gap-8"}>
          {/* FORM */}
          <div className={"md:w-[54%] order-2 md:order-1"}>
            <form className={"flex flex-col gap-6 p-10 bg-primary rounded-2xl"}>
              <h3 className={"text-3xl font-semibold text-white"}>
                How can we help?
              </h3>
              <p className={"text-white/60"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                commodi, corporis cumque cupiditate deserunt dignissimos
                expedita facilis libero mollitia nulla placeat quisquam
                recusandae rerum saepe temporibus totam velit voluptas
                voluptates?
              </p>

              {/* INPUT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type={"firstname"}
                  placeholder="First Name"
                  className={""}
                />
                <Input
                  type={"lastname"}
                  placeholder="Last Name"
                  className={""}
                />
                <Input type={"email"} placeholder="Email" className={""} />
                <Input
                  type={"phone"}
                  placeholder="Phone number"
                  className={""}
                />
              </div>

              {/* SELECT SERVICE */}
              <Select>
                <SelectTrigger className={"w-full"}>
                  <SelectValue placeholder={"Select a service"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value={"peritoneal_dialysis"}>
                      Peritoneal Dialysis (CAPD)
                    </SelectItem>
                    <SelectItem value={"basic_care"}>Basic care</SelectItem>
                    <SelectItem value={"treatment_care"}>
                      Treatment care
                    </SelectItem>
                    <SelectItem value={"domestic_help"}>
                      Domestic help
                    </SelectItem>
                    <SelectItem value={"respite_care"}>Respite care</SelectItem>
                    <SelectItem value={"other_services"}>Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* TEXTAREA */}
              <Textarea
                className={
                  "h-50 bg-primary-tint  placeholder:text-sm placeholder:text-grey-primary"
                }
                placeholder={"Type your message here..."}
              />

              {/* Submit Button */}
              <Button
                className={
                  "bg-primary-tint text-grey-primary hover:bg-primary-tint/90 w-full md:max-w-40"
                }
              >
                Send message
              </Button>
            </form>
          </div>

          {/* INFO */}
          <div
            className={
              "flex-1 flex items-center md:justify-end order-1 md:order-2 mb-8 md:mb-0"
            }
          >
            <div className="flex-1 flex items-center md:justify-center order-1 md:order-2 mb-8 md:mb-0">
              <ul className={"flex flex-col gap-8"}>
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className={
                        "w-13 h-13 xl:w-18 xl:h-18 flex items-center justify-center"
                      }
                    >
                      <div className="mb-4 rounded-full bg-primary-shade/20 p-4 text-primary">
                        {item.icon}
                      </div>
                    </div>

                    <div className="mb-2 text-xl font-semibold text-grey-primary">
                      <p>{item.title}</p>
                      <h3 className="text-grey-primary">
                        {item.title === "Tel / Fax" && (
                          <a type={"tel"} href={`tel:${item.description}`}>
                            {item.description}
                          </a>
                        )}
                        {item.title === "Mobile" && (
                          <a type={"tel"} href={`tel:${item.description}`}>
                            {item.description}
                          </a>
                        )}
                        {item.title === "Email" && (
                          <a type={"tel"} href={`mailto:${item.description}`}>
                            {item.description}
                          </a>
                        )}
                        {item.title === "Address" && (
                          <a
                            type={"tel"}
                            href={
                              "http://maps.google.com/?q=Jolly Straße 5,81545 München"
                            }
                            target={"_blank"}
                          >
                            {item.description}
                          </a>
                        )}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
