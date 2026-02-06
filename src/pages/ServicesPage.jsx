import { useAppContext } from "@/hooks/useAppContext";
import Section from "@/layout/Section";

const ServicesPage = () => {
  const { services } = useAppContext();

  console.log(services);

  return (
    <Section>
      <h1>{services.title}</h1>
      {services.description.map((desc) => {
        return (
          <p key={desc.id} className={"mb-12"}>
            {desc}
          </p>
        );
      })}
    </Section>
  );
};

export default ServicesPage;
