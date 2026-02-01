import { Link } from "react-router";
import Section from "../../layout/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import basic_care_img from "../../assets/images/basic-care.jpeg";

const CareTypes = () => {
  return (
    <Section className={"bg-white"}>
      <div
        className={
          "bg-[#F5EEE8] py-10 rounded-2xl flex flex-col items-center justify-center"
        }
      >
        <Tabs defaultValue="home-care" className="w-[95%]">
          <TabsList className={"bg-white "}>
            <TabsTrigger value="home-care">Home Care</TabsTrigger>
            <TabsTrigger value="nursing-care">Nursing Care</TabsTrigger>
          </TabsList>
          <TabsContent
            value="home-care"
            className={"w-full flex flex-col items-center"}
          >
            <h2 className={"text-3xl font-bold mb-10"}>What is Home Care?</h2>
            <p className="w-[750px] text-center mb-8">
              Home care focuses on non-medical support to help you and your
              loved ones with daily living. Our carefully screened and highly
              qualified caregivers provide comprehensive home care and help you
              rediscover activities you love through our Happier Aging
              Philopsphy
            </p>

            <div className={"w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"}>
              {/* todo Link flex-1 staviti na ostale Cards */}
              <Link
                to={"/services"}
                className={"group h-full"}
              >
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
                      className="inline-flex items-center justify-center rounded-md bg-primary1 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary1/90"
                      type="button"
                    >
                      Read More
                    </button>
                  </CardFooter>
                </Card>
              </Link>

              <Link
                to={"/services"}
                className={"group h-full"}
              >
                <Card className="flex-1 relative mx-auto w-full h-full max-w-sm pt-0 overflow-hidden">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
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
                      className="inline-flex items-center justify-center rounded-md bg-primary1 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary1/90"
                      type="button"
                    >
                      Read More
                    </button>
                  </CardFooter>
                </Card>
              </Link>

              <Link
                to={"/services"}
                className={"group h-full"}
              >
                <Card className="relative mx-auto w-full h-full max-w-sm pt-0 overflow-hidden">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
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
                      className="inline-flex items-center justify-center rounded-md bg-primary1 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary1/90"
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
            <p className="w-[750px] text-center mb-8">
              Through our health care services, we bring skilled, trained,
              certified nurses right to your home. Our experienced nurses
              provide support in medication management, post-surgery and and
              more.
            </p>

            <div
              className={"w-full flex justify-around items-center gap-8 mb-8"}
            >
              <div
                className={
                  "bg-white flex-1 h-[400px] rounded-2xl flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>
                <p>DESCRIPTION</p>

                <button className="bg-primary1 px-6 py-3 rounded-[5px]">
                  Read More
                </button>
              </div>
              <div
                className={
                  "bg-white h-[400px] flex-1 rounded-2xl flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>
                <p>DESCRIPTION</p>

                <button className="bg-primary1 px-6 py-3 rounded-[5px]">
                  Read More
                </button>
              </div>
              <div
                className={
                  "bg-white h-[400px] flex-1 rounded-2xl flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>
                <p>DESCRIPTION</p>

                <button className="bg-primary1 px-6 py-3 rounded-[5px]">
                  Read More
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Link to="/services">View all Services &rarr;</Link>
      </div>
    </Section>
  );
};

export default CareTypes;
