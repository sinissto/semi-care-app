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
        {/* 
        <div>
          <a href="#">TAB 1</a>
          <a href="#">TAB 2</a>
        </div>

 
        <h2>What is Home Care?</h2>

   
        <p>
          Home care focuses on non-medical support to help you and your loved
          ones with daily living. Our carefully screened and highly qualified
          caregivers provide comprehensive home care and help you rediscover
          activities you love through our Happier Aging Philopsphy
        </p>


        <div>
          <h3 className={"inline-block"}>CARD</h3>
          <h3 className={"inline-block"}>CARD</h3>
          <h3 className={"inline-block"}>CARD</h3>
        </div>

        <Link to={"/services"}>View all Services &rarr;</Link> 
        */}

        <Tabs defaultValue="account" className="">
          <TabsList className={"bg-white"}>
            <TabsTrigger value="account">Home Care</TabsTrigger>
            <TabsTrigger value="password">Nursing Care</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <h2 className={"text-3xl font-bold mb-10"}>What is Home Care?</h2>
            <p className="mb-8">
              Home care focuses on non-medical support to help you and your
              loved ones with daily living. Our carefully screened and highly
              qualified caregivers provide comprehensive home care and help you
              rediscover activities you love through our Happier Aging
              Philopsphy
            </p>

            <div className={"flex justify-around items-center mb-8"}>
              <div
                className={
                  "bg-white w-[300px] h-[400px] flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>

                <button className="bg-primary1 px-6 py-3 rounded-[5px]">
                  Read More
                </button>
              </div>
              <div
                className={
                  "bg-white w-[300px] h-[400px] flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>

                <button className="bg-primary1 px-6 py-3 rounded-[5px]">
                  Read More
                </button>
              </div>
              <div
                className={
                  "bg-white w-[300px] h-[400px] flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>

                <button className="bg-primary1 px-6 py-3 rounded-[5px]">
                  Read More
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <h2>What is Nursing Care?</h2>
            <p>
              Home care focuses on non-medical support to help you and your
              loved ones with daily living. Our carefully screened and highly
              qualified caregivers provide comprehensive home care and help you
              rediscover activities you love through our Happier Aging
              Philopsphy
            </p>

            <div className={"flex justify-around items-center mb-8"}>
              <div
                className={
                  "bg-white w-[300px] h-[400px] flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>

                <button className="bg-primary1 px-6 py-3 rounded-[5px]">
                  Read More
                </button>
              </div>
              <div
                className={
                  "bg-white w-[300px] h-[400px] flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>

                <button className="bg-primary1 px-6 py-3 rounded-[5px]">
                  Read More
                </button>
              </div>
              <div
                className={
                  "bg-white w-[300px] h-[400px] flex flex-col gap-8 items-center justify-center"
                }
              >
                <p>IMAGE</p>
                <p>Heading h3</p>

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
