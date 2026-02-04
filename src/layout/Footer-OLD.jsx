import { Link } from "react-router";
import logo from "@/assets/images/LogoLarge.png";

const FooterOLD = () => {
  return (
    <footer className="bg-primary rounded-t-4xl p-6">
      <div className="max-w-8xl mx-auto flex flex-col items-center justify-center gap-5 px-10 pt-16 mb-8">
        <h2 className="text-6xl text-white font-bold ">Semi Care</h2>
        <p className="text-2xl text-center font-semibold text-white uppercase">
          How can we make your life happier?
        </p>
        <p className="text-xl text-center font-semibold text-white uppercase">
          We offer a free consultation!
        </p>
        <Link
          to={"/contact"}
          className={
            "text-xl text-center text-primary font-semibold px-6 py-3 bg-white rounded-[5px]"
          }
        >
          Let's find out
        </Link>
      </div>

      <div
        className={
          "max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-2xl"
        }
      >
        <img src={logo} className={"w-[30%] h-auto rounded-2xl"} />

        <div>SERVICES</div>

        <div className="text-sm">
          <p>Email: info@semi-care.de</p>
          <p>Phone: +01 23 45 67 890</p>
        </div>

        <div>SOCIALS, MAYBE</div>
      </div>
    </footer>
  );
};

export default FooterOLD;
