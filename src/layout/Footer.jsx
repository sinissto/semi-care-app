import { FooterNav } from "@/components/FooterNav";

const FooterOLD = () => {
  return (
    <footer className="max-w-8xl mx-auto bg-slate-200 rounded-t-md p-6 mt-8">
      {/*<div*/}
      {/*  className={*/}
      {/*    "max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-2xl"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <img src={logo} className={"w-[30%] h-auto rounded-2xl"} />*/}

      {/*  <div>SERVICES</div>*/}

      {/*  <div className="text-sm">*/}
      {/*    <p>Email: info@semi-care.de</p>*/}
      {/*    <p>Phone: +01 23 45 67 890</p>*/}
      {/*  </div>*/}

      {/*  <div>SOCIALS, MAYBE</div>*/}
      {/*</div>*/}
      <FooterNav className={"bg-white rounded-md p-8"} />
    </footer>
  );
};

export default FooterOLD;
