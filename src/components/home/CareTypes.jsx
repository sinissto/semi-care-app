import { Link } from "react-router";
import Section from "../../layout/Section";

const CareTypes = () => {
  return (
    <Section className={"bg-white"}>
      <div className={"bg-[#F5EEE8] py-10"}>
        {/* tabs */}
        <div>
          <a href="#">TAB 1</a>
          <a href="#">TAB 2</a>
        </div>

        {/* type heading */}
        <h2>What is Home Care?</h2>

        {/* type description */}
        <p>
          Home care focuses on non-medical support to help you and your loved
          ones with daily living. Our carefully screened and highly qualified
          caregivers provide comprehensive home care and help you rediscover
          activities you love through our Happier Aging Philopsphy
        </p>

        {/* cards with few specific care type */}
        <div>
          <h3 className={"inline-block"}>CARD</h3>
          <h3 className={"inline-block"}>CARD</h3>
          <h3 className={"inline-block"}>CARD</h3>
        </div>

        {/* button to the all services */}
        <Link to={"/services"}>View all Services &rarr;</Link>
      </div>
    </Section>
  );
};

export default CareTypes;
