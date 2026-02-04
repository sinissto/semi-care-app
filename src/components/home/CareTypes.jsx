import { Link } from "react-router";
import Section from "@/layout/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import basic_care_img from "@/assets/images/basic_care.jpeg";
import domestic_service_img from "@/assets/images/domestic_care.jpg";
import respite_care_img from "@/assets/images/respite_care_women.jpg";
import peritoneal_dialysis_img from "@/assets/images/peritoneal_dialysis.png";
import treatment_care_img from "@/assets/images/treatment_care.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CareTypes = () => {
  return (
    <Section className={"bg-white"}>
      <div
        className={
          "bg-[#F5EEE8] py-10 rounded-2xl flex flex-col items-center justify-center"
        }
      >
        <Tabs defaultValue="home-care" className="w-[95%] mb-10">
          <TabsList className={"bg-white "}>
            <TabsTrigger value="home-care">Home Care</TabsTrigger>
            <TabsTrigger value="nursing-care">Nursing Care</TabsTrigger>
          </TabsList>
          <TabsContent
            value="home-care"
            className={"w-full flex flex-col items-center"}
          >
            <h2 className={"text-3xl text-primary font-bold mb-6"}>
              What is Home Care?
            </h2>
            <p className="max-w-xl text-xl/normal text-center text-grey-primary mb-8 lg:text-xl ">
              Home care focuses on non-medical support to help you and your
              loved ones with daily living. Our carefully screened and highly
              qualified caregivers provide comprehensive home care and help you
              rediscover activities you love through our Happier Aging
              Philosophy
            </p>

            <div
              className={"w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"}
            >
              {/* todo Link flex-1 staviti na ostale Cards */}
              <Link to={"/services"} className={"group h-full"}>
                <Card className="relative mx-auto w-full h-full max-w-sm pt-0 overflow-hidden transition-shadow duration-200 group-hover:shadow-md">
                  {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
                  <img
                    src={basic_care_img}
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <CardHeader className={"flex-1"}>
                    <CardAction>
                      {/* <Badge variant="secondary">Featured</Badge> */}
                    </CardAction>
                    <CardTitle>Basic Care</CardTitle>
                    <CardDescription>
                      Basic care supports people with their daily needs and
                      ensures well-being, hygiene, and safety. The goal of basic
                      care is to maintain independence as much as possible,
                      promote health, and enable people to live with dignity.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className={"mt-auto"}>
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary/90"
                      type="button"
                    >
                      Read More
                    </button>
                  </CardFooter>
                </Card>
              </Link>

              <Link to={"/services"} className={"group h-full"}>
                <Card className="flex-1 relative mx-auto w-full h-full max-w-sm pt-0 overflow-hidden">
                  {/*<div className="absolute inset-0 z-30 aspect-video bg-black/35" />*/}
                  <img
                    src={respite_care_img}
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <CardHeader className="flex-1">
                    <CardAction>
                      {/* <Badge variant="secondary">Featured</Badge> */}
                    </CardAction>
                    <CardTitle>Respite Care</CardTitle>
                    <CardDescription>
                      You want to go on vacation. You are ill or simply at the
                      end of your rope. But then there's that one person you
                      lovingly care for every day. And you wonder: Who will look
                      after them when I can't? Respite care exists precisely for
                      these moments.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className={"mt-auto"}>
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary/90"
                      type="button"
                    >
                      Read More
                    </button>
                  </CardFooter>
                </Card>
              </Link>

              <Link to={"/services"} className={"group h-full"}>
                <Card className="relative mx-auto w-full h-full max-w-sm pt-0 overflow-hidden">
                  {/*<div className="absolute inset-0 z-30 aspect-video bg-black/35" />*/}
                  <img
                    src={domestic_service_img}
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <CardHeader className="flex-1">
                    <CardAction>
                      {/* <Badge variant="secondary">Featured</Badge> */}
                    </CardAction>
                    <CardTitle>Domestic Service</CardTitle>
                    <CardDescription>
                      We offer various supplementary services that are not part
                      of basic and medical care. If needed, our patients can
                      book domestic support services to facilitate daily life.
                      These are billed either as in-kind benefits through the
                      long-term care insurance or as private services.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className={"mt-auto"}>
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary/90"
                      type="button"
                    >
                      Read More
                    </button>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          </TabsContent>

          {/* ******************************************************************************* */}
          <TabsContent
            value="nursing-care"
            className={"w-full flex flex-col items-center"}
          >
            <h2 className={"text-3xl font-bold mb-10"}>
              What is Nursing Care?
            </h2>
            <p className="max-w-xl text-xl/normal text-center text-grey-primary mb-8 lg:text-xl">
              Through our health care services, we bring skilled, trained,
              certified nurses right to your home. Our experienced nurses
              provide support in medication management, post-surgery and and
              more.
            </p>

            <div
              className={"w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"}
            >
              {/* todo Link flex-1 staviti na ostale Cards */}
              <Link to={"/services"} className={"group h-full"}>
                <Card className="relative mx-auto w-full h-full max-w-sm pt-0 overflow-hidden transition-shadow duration-200 group-hover:shadow-md">
                  {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
                  <img
                    src={peritoneal_dialysis_img}
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <CardHeader className={"flex-1"}>
                    <CardAction>
                      {/* <Badge variant="secondary">Featured</Badge> */}
                    </CardAction>
                    <CardTitle>Peritoneal Dialysis (CAPD)</CardTitle>
                    <CardDescription>
                      Peritoneal dialysis changes everyday life – for patients
                      as well as their families. It brings with it many
                      questions, uncertainties, and anxieties. At SemiCare, we
                      won't leave you alone with these challenges. We provide
                      competent, empathetic, and reliable support to people
                      undergoing peritoneal dialysis – right in your own home.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className={"mt-auto"}>
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary/90"
                      type="button"
                    >
                      Read More
                    </button>
                  </CardFooter>
                </Card>
              </Link>

              <Link to={"/services"} className={"group h-full"}>
                <Card className="flex-1 relative mx-auto w-full h-full max-w-sm pt-0 overflow-hidden">
                  {/*<div className="absolute inset-0 z-30 aspect-video bg-black/35" />*/}
                  <img
                    src={treatment_care_img}
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105  "
                  />
                  <CardHeader className="flex-1">
                    <CardAction>
                      {/* <Badge variant="secondary">Featured</Badge> */}
                    </CardAction>
                    <CardTitle>Treatment Care</CardTitle>
                    <CardDescription>
                      Treatment care encompasses medical measures carried out by
                      nursing professionals in the home environment on the
                      orders of a physician to cure, alleviate, or prevent the
                      worsening of illnesses. It falls under the umbrella of
                      home-based nursing care (German Social Code, Book V)
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className={"mt-auto"}>
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary/90"
                      type="button"
                    >
                      Read More
                    </button>
                  </CardFooter>
                </Card>
              </Link>

              <Link to={"/services"} className={"group h-full"}>
                <Card className="relative mx-auto w-full h-full max-w-sm pt-0 overflow-hidden">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  <img
                    src={domestic_service_img}
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105  brightness-40 grayscale dark:brightness-40"
                  />
                  <CardHeader className="flex-1">
                    <CardAction>
                      {/* <Badge variant="secondary">Featured</Badge> */}
                    </CardAction>
                    <CardTitle></CardTitle>
                    <CardDescription
                      className={"text-3xl text-red-600 font-bold"}
                    >
                      Ubaciti jos neki servis vezan za nursing care, ili
                      izbaciti karticu potpuno
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className={"mt-auto"}>
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary/90"
                      type="button"
                    >
                      Read More
                    </button>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        <Button asChild variant="outline" className="w-full sm:w-auto ">
          <Link
            to={"/services"}
            className={
              "text-xl bg-primary text-white inline-block py-6 px-12 rounded-lg hover:bg-transparent hover:text-primary hover:inset-ring-3 hover:inset-ring-primary active:scale-[0.98] transition-colors duration-300"
            }
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default CareTypes;
