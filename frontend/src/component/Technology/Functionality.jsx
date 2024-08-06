import { useEffect, useRef, useState } from "react";
import "./Functionality.css";
import MoneyImg from "../../assets/Money.svg";
import SecurityImg from "../../assets/security.svg";
import GovernanceImg from "../../assets/Governance.svg";
import AgencyImg from "../../assets/Agency.svg";
import ReliabilityImg from "../../assets/Reliability.svg";
import InteroperabilityImg from "../../assets/Interoperability.svg";

const functionalities = [
  {
    id: 1,
    imgSrc: SecurityImg,
    title: "AI & ML",
    description:
      "At SmartML Labs, we harness cutting-edge AI and Machine Learning technologies to build sophisticated predictive models, develop intelligent algorithms, and analyze data, transforming insights into actionable strategies and automating complex processes.",
  },
  {
    id: 2,
    imgSrc: MoneyImg,
    title: "Web Development",
    description:
      "We specialize in crafting intelligent web applications that integrate advanced AI technologies. Our solutions enhance user experiences, automate interactions, and provide valuable insights, creating a smarter and more engaging digital presence.",
  },
  {
    id: 3,
    imgSrc: GovernanceImg,
    title: "Application Development",
    description:
      "Our expertise in application development involves leveraging AI to create innovative solutions. We focus on delivering personalized experiences, automating tasks, and providing actionable insights to drive smarter business decisions and operational efficiency.",
  },
  {
    id: 4,
    imgSrc: AgencyImg,
    title: "SaaS Solutions",
    description:
      "We design and deploy scalable Software as a Service (SaaS) solutions that streamline operations and boost productivity. Our AI-driven services are tailored to meet your needs, offering flexibility and enhancing overall performance.",
  },
  {
    id: 5,
    imgSrc: ReliabilityImg,
    title: "Cloud Services",
    description:
      "SmartML Labs provides comprehensive Cloud Services, including scalable infrastructure, secure data storage, and seamless application hosting. Our solutions ensure high availability, robust security, and optimal performance for your digital transformation journey.",
  },
  {
    id: 6,
    imgSrc: InteroperabilityImg,
    title: "Software Development",
    description:
      "Our software development services integrate advanced AI technologies to build intelligent solutions. We focus on enhancing user experiences, automating processes, and delivering insightful analytics to support smarter and more efficient business operations.",
  },
];

const Functionality = () => {
  const [visibleElements, setVisibleElements] = useState([]);
  const elementsRef = useRef([]);

  useEffect(() => {
    const currentElements = elementsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => [...prev, entry.target]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="max-w-[1200px] p-[120px_40px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {functionalities.map((func, index) => (
          <div
            key={func.id}
            ref={(el) => (elementsRef.current[index] = el)}
            className={`flex flex-col items-center text-center p-[55px_10%_25px] rounded-xl shadow-lg transition-opacity duration-1000 ${
              visibleElements.includes(elementsRef.current[index])
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(140deg, rgba(29, 40, 56, .5), rgba(29, 40, 56, .25))",
              transitionDelay: `${index * 0.2}s`,
            }}
          >
            <img
              src={func.imgSrc}
              alt={func.title}
              className="w-[44px] h-[44px] mb-[22px]"
              style={{
                filter:
                  "invert(51%) sepia(69%) saturate(5784%) hue-rotate(258deg) brightness(100%) contrast(101%)",
              }}
            />
            <h2 className="text-white text-[24px] font-semibold leading-[130%] tracking-[-0.5px] mt-0 mb-[18px]">
              {func.title}
            </h2>
            <p className="text-[#616d7e] mb-[32px]">{func.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Functionality;
