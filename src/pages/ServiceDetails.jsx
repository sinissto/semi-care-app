import Section from "@/layout/Section";
import { useParams } from "react-router";
import { useAppContext } from "@/hooks/useAppContext";

const ServiceDetails = () => {
  const { services } = useAppContext().services;
  const params = useParams();
  console.log("Service Name:", params.serviceName);
  console.log("Available Services:", services);

  const service = services.find(
    (service) => service.slug.toLowerCase() === params.serviceName.toLowerCase()
  );

  console.log("Matched Service:", service.title);

  return (
    <Section>
      <h1 className={"text-3xl font-bold mb-4"}>Service Details</h1>
    </Section>
  );
};

export default ServiceDetails;
