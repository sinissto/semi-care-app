import Section from "../../layout/Section";
import heroImg from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <Section>
      <div className={"grid grid-cols-2 items-center gap-24"}>
        {/* hero text box */}
        <div className={""}>
          {/* hero heading primary */}
          <h1
            className={
              "text-5xl/[1.05] text-grey-primary font-primary font-bold -tracking-[0.5px] mb-8"
            }
          >
            Home care - because home is where the heart is
          </h1>
          {/* hero description */}
          <p className={"text-xl/normal text-grey-primary mb-12"}>
            Quality-assured home care and medical services in accordance with
            recognized healthcare standards. Focuses on safety, reliability, and
            preserving independence, while supporting families through clear
            communication and trusted care.
          </p>

          <a
            href="#"
            className={
              "text-xl bg-primary1 text-white inline-block py-4 px-8 rounded-lg mr-8 hover:bg-primary-shade active:scale-[0.98] transition-colors duration-300"
            }
          >
            Contact us
          </a>
          <a
            href="#"
            className={
              "text-xl bg-white text-grey-primary inline-block py-4 px-8 rounded-lg hover:bg-primary-tint hover:inset-ring-3 hover:inset-ring-white active:scale-[0.98] transition-colors duration-300"
            }
          >
            About us &darr;
          </a>
        </div>

        {/* hero img box */}
        <div className={""}>
          <img
            src={heroImg}
            className={"w-full"}
            alt="Nurse is holding hand of old person"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
