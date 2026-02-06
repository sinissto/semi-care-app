import Section from "@/layout/Section";
import { Link } from "react-router";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import basic_care_img from "@/assets/images/basic_care.jpeg";
import respite_care_img from "@/assets/images/respite_care_woman.jpg";
import domestic_service_img from "@/assets/images/domestic_care.jpg";
import { useAppContext } from "@/hooks/useAppContext";
import ServiceCard from "@/components/services/ServiceCard";

const ServicesList = () => {
  const { services } = useAppContext().services;

  console.log(services);

  return (
    <Section>
      <div
        className={
          "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
        }
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            url={service.url}
            image={service.images.at(0)}
            title={service.title}
            description={service.description.at(0)}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;
