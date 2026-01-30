import heroImg from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className={"bg-[#fad9e5] py-24"}>
      {/* .hero */}
      <div
        className={
          " max-w-7xl grid grid-cols-2 items-center gap-24 mx-auto px-8"
        }
      >
        {/* hero text box */}
        <div className={""}>
          {/* hero heading primary */}
          <h1
            className={
              "text-5xl/[1.05] font-primary font-bold -tracking-[0.5px] mb-8"
            }
          >
            Home care - because home is where the heart is
          </h1>
          {/* hero description */}
          <p className={"text-xl/normal mb-12"}>
            Quality-assured home care and medical services in accordance with
            recognized healthcare standards. Focuses on safety, reliability, and
            preserving independence, while supporting families through clear
            communication and trusted care.
          </p>

          <a
            href="#"
            className={
              "text-xl bg-[#E8407B] text-white inline-block py-4 px-8 rounded-lg mr-8 hover:bg-[#d13a6f] active:scale-[0.98] transition-colors duration-300"
            }
          >
            Contact us
          </a>
          <a
            href="#"
            className={
              "text-xl bg-white text-[#555] inline-block py-4 px-8 rounded-lg hover:bg-[#fad9e5] hover:inset-ring-3 hover:inset-ring-white active:scale-[0.98] transition-colors duration-300"
            }
          >
            About us &rarr;
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
    </section>
  );
};

export default Hero;
