import Section from "../../layout/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import {
  Heart,
  LucideGraduationCap,
  HouseHeartIcon,
  Handshake,
  Phone,
  ShieldUser,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    id: 1,
    icon: <Heart className="size-7 shrink-0 stroke-primary" />,
    title: "Humanity and trust",
    text: 'At SemiCare, people are at the heart of everything we do – not just care services. We don\'t provide care "according to a plan", but with heart. We listen, we understand, we support – even during difficult times. We build long-term relationships – with our clients and their families.',
  },
  {
    id: 2,
    icon: <LucideGraduationCap className="size-7 shrink-0 stroke-primary" />,
    title: "Expertise and Experience",
    text: "Our qualified team possesses in-depth expertise and many years of experience in outpatient and inpatient care. We work according to the highest quality standards and participate in regular professional development. This ensures professional care: medically sound and delivered with compassionate care.",
  },
  {
    id: 3,
    icon: <HouseHeartIcon className="size-7 shrink-0 stroke-primary" />,
    title: "Care in a place where you feel safe",
    text: "Your own home is a place full of memories, security and familiarity. That's exactly where we come in. Our outpatient care service enables people to remain in their familiar surroundings, to live independently and autonomously for as long as possible, and yet to feel well cared for.",
  },
  {
    id: 4,
    icon: <Handshake className="size-7 shrink-0 stroke-primary" />,
    title: "Individual consultation",
    text: "We know that every person has their own story and their own needs. That's what we base our care on. Individually tailored care is our focus. Our care isn't limited to a routine program, but is provided with time, patience, and attention.",
  },
  {
    id: 5,
    icon: <Phone className="size-7 shrink-0 stroke-primary" />,
    title: "Reliability and accessibility",
    text: "Reliability, punctuality, and clear communication are a matter of course for us. We are there for you – even when things get difficult. We are available 24 hours a day for emergencies, including Sundays and public holidays.",
  },
  {
    id: 6,
    icon: <ShieldUser className="size-7 shrink-0 stroke-primary" />,
    title: "Trust of relatives",
    text: "The decision to entrust one's parents or a loved one to strangers is never easy. At SemiCare, we understand these feelings perfectly – because for us, caregiving is more than just a service. It's a matter of trust. Trust begins where you can let go, knowing that those in need are in good hands.",
  },
];

const SpecialUs = () => {
  return (
    <Section className={"bg-transparent"}>
      <h2 className="text-3xl text-primary font-bold text-center mb-12">
        What makes SemiCare special?
      </h2>
      <div className="flex flex-col items-center justify-center mb-8">
        <p className="max-w-xl text-xl/normal text-center text-grey-primary mb-6 lg:text-xl">
          We are a reliable partner for family members. We provide relief,
          advice, and support – transparently, honestly, and accessibly. In this
          way, we create security for the whole family.
        </p>
        <p className="max-w-xl text-xl/normal text-center text-grey-primary mb-8 lg:text-xl">
          In the end, only one thing matters – that you know with a calm heart
          that your loved ones are in good hands.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative max-w-8xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Keyboard, Mousewheel]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          spaceBetween={2}
          slidesPerView={1}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.7,
            thresholdDelta: 10,
            releaseOnEdges: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={"items-stretch"}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="!h-auto flex">
              <div className="flex flex-col h-full rounded-md bg-primary/20 p-6 shadow-md scale-90 swiper-slide-active:scale-100 transition-transform duration-300">
                <div
                  className={
                    "w-10 h-10 bg-white rounded-md flex items-center justify-center  mb-4"
                  }
                >
                  {card.icon}
                </div>

                <h3 className="text-xl text-primary-shade font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-grey-primary text-lg">{card.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination (centered under swiper) */}
        <div className="custom-pagination mt-8 flex justify-center" />
      </div>
    </Section>
  );
};

export default SpecialUs;
