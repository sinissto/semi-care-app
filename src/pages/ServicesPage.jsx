import { useAppContext } from "@/hooks/useAppContext";

import { ServicesHero } from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesList />
    </>
  );
};

export default ServicesPage;
