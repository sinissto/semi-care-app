import Section from "@/layout/Section";

import step1 from "../../assets/images/step1.png";
// import step2 from "../../assets/images/step2.jpg";
// import step3 from "../../assets/images/step3.jpg";

const Steps = () => {
  return (
    <Section className="bg-primary-tint/30 rounded-b-2xl py-6">
      <p className="text-lg font-bold uppercase text-center text-primary mb-2">
        Easy as 1-2-3
      </p>
      <h2 className="text-2xl font-bold text-center mb-6">
        Get the Care Simple
      </h2>
      {/* <div className="flex flex-col items-center justify-center"> */}
      {/* <p className="w-[750px] text-center mb-4">

          We are a reliable partner for family members. We provide relief,
          advice, and support – transparently, honestly, and accessibly. In this
          way, we create security for the whole family.
        </p> */}
      {/* </div> */}

      <div className="grid items-center justify-start grid-cols-1 md:grid-cols-2 gap-2 mb-12">
        {/* STEP 1 */}
        <div className="">
          <p className="text-6xl text-primary/50 font-bold uppercase mb-1">1</p>
          <h3 className="text-2xl text-primary font-bold mb-4">
            Free consultation
          </h3>
          <p className="text-base mb-2">
            Contact us anytime to book a consultation. We listen to your
            needs—whether that's elder care, personal care or recovery
            support—to learn how we can make your lives better.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div
            className={
              "absolute w-[55%] pb-[55%] bg-primary-tint/80 rounded-[50%] -z-2"
            }
          ></div>
          <div
            className={
              "absolute w-[45%] pb-[45%] bg-primary/30 rounded-[50%] -z-1"
            }
          ></div>
          <img src={step1} alt="Step 1" className="w-[35%] rounded-md z-30" />
        </div>
      </div>

      {/* STEP 2 */}
      <div className="grid items-center justify-start grid-cols-1 md:grid-cols-2 gap-2 mb-12">
        <div className="order-1 md:order-2">
          <p className="text-6xl text-primary/50 font-bold uppercase mb-1">2</p>
          <h3 className="text-2xl text-primary font-bold mb-3">
            Getting to Know You
          </h3>
          <p className="text-base mb-2">
            A Care Designer meets with you, virtually or in person, to assess
            your needs and preferences before creating a Care Plan tailor-made
            for you. We match you with the perfect caregiver with the right
            skills, a kind heart and a personality you’ll love.
          </p>
        </div>
        <div className="relative flex items-center justify-center order-2 md:order-1">
          <div
            className={
              "absolute w-[55%] pb-[55%] bg-primary-tint/80 rounded-[50%] -z-2"
            }
          ></div>
          <div
            className={
              "absolute w-[45%] pb-[45%] bg-primary/30 rounded-[50%] -z-1"
            }
          ></div>
          <img src={step1} alt="Step 2" className="w-[35%] rounded-md" />
        </div>
      </div>

      {/* STEP 3 */}
      <div className="grid items-center justify-start grid-cols-1 md:grid-cols-2 gap-2 mb-4">
        <div className="">
          <p className="text-6xl text-primary/50 font-bold uppercase mb-1">3</p>
          <h3 className="text-2xl text-primary font-bold mb-3">First visit</h3>
          <p className="text-base mb-2">
            We aim to send the same Caregiver every visit so you can grow your
            relationship with your perfect match Caregiver from day one. Our
            team stays in touch, monitoring care and making tweaks as needed
            throughout your care journey.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div
            className={
              "absolute w-[55%] pb-[55%] bg-primary-tint/80 rounded-[50%] -z-2"
            }
          ></div>
          <div
            className={
              "absolute w-[45%] pb-[45%] bg-primary/30 rounded-[50%] -z-1"
            }
          ></div>
          <img src={step1} alt="Step 3" className="w-[35%] rounded-md" />
        </div>
      </div>
    </Section>
  );
};

export default Steps;
