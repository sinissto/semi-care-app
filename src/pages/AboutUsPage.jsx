import AboutUsHero from "@/components/about_us/AboutUsHero";
import { About } from "@/components/About";
import Section from "@/layout/Section";

const AboutUsPage = () => {
  return (
    <Section className={"bg-primary-tint rounded-b-2xl"}>
      <About />
    </Section>
  );
};

export default AboutUsPage;
