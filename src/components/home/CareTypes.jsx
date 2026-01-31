import { Link } from "react-router";
import Section from "../../layout/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CareTypes = () => {
  return (
    <Section className={"bg-white"}>
      <div
        className={
          "bg-[#F5EEE8] py-10 rounded-2xl flex flex-col items-center justify-center"
        }
      >
        <Tabs defaultValue="home-care" className=" w-[95%]">
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

            <div
              className={"w-full flex justify-around items-center gap-8 mb-8"}
            >
              <div
                className={
                  "bg-white flex-1 rounded-2xl h-[400px] flex flex-col gap-8 items-center justify-center"
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
                  "bg-white flex-1 rounded-2xl h-[400px] flex flex-col gap-8 items-center justify-center"
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
                  "bg-white flex-1 rounded-2xl h-[400px] flex flex-col gap-8 items-center justify-center"
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
