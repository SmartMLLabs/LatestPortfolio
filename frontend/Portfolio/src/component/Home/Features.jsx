import { useEffect, useRef, useState } from "react";
import MoneyImg from "../../assets/Money.svg";
import SecurityImg from "../../assets/security.svg";
import GovernanceImg from "../../assets/Governance.svg";
import AgencyImg from "../../assets/Agency.svg";
import ReliabilityImg from "../../assets/Reliability.svg";
import InteroperabilityImg from "../../assets/Interoperability.svg";

const icons = [
  {
    img: SecurityImg,
    title: "AI & ML",
    description:
      "At SmartML Labs, we leverage cutting-edge AI and Machine Learning technologies to deliver transformative solutions. Our expertise spans building sophisticated predictive models, developing intelligent algorithms.",
  },
  {
    img: MoneyImg,
    title: "Web Development",
    description:
      "At SmartML Labs, we specialize in creating intelligent web applications by integrating advanced AI technologies, enhancing user experiences, automating processes, and providing actionable insights for a smarter digital future",
  },
  {
    img: GovernanceImg,
    title: "Application Development",
    description:
      "At SmartML Labs, we excel in developing innovative applications by leveraging cutting-edge AI technologies, delivering personalized experiences, automating tasks, and providing actionable insights to drive smarter business decisions.",
  },
  {
    img: AgencyImg,
    title: "SaaS",
    description:
      "At SmartML Labs, we excel in designing and deploying Software as a Service (SaaS) solutions that streamline operations and enhance productivity. Our services encompass creating scalable applications tailored to your needs.",
  },
  {
    img: ReliabilityImg,
    title: "Cloud Services",
    description: "At SmartML Labs, we offer comprehensive Cloud Services to empower your digital transformation journey. From scalable infrastructure solutions to robust data storage and seamless application hosting, our expertise ensures high availability, security, and performance.",
  },
  {
    img: InteroperabilityImg,
    title: "Software Development",
    description:
      "At SmartML Labs, we pioneer software development by incorporating advanced AI technologies, creating intelligent solutions that enhance user experiences, automate processes, and provide valuable insights for smarter business operations.",
  },
];

const Features = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black pt-[100px]">
      <div
        className={`text-[#aa55f4] font-thin py-2 px-4 rounded-xl mb-4 border border-[#aa55f4] border-opacity-35 tracking-[2px] text-[13px] transition-opacity duration-1000 ${
          visibleElements.includes(elementsRef.current[0])
            ? "opacity-100"
            : "opacity-0"
        }`}
        ref={(el) => (elementsRef.current[0] = el)}
      >
        Services
      </div>
      <div className="max-w-5xl md:max-w-7xl lg:max-w-5xl mx-auto text-center mb-14">
        <h1
          className={`text-4xl  md:text-6xl lg:text-[66px] font-medium text-white transition-opacity duration-1000 ${
            visibleElements.includes(elementsRef.current[1])
              ? "opacity-100"
              : "opacity-0"
          }`}
          ref={(el) => (elementsRef.current[1] = el)}
          style={{
            lineHeight: "1.1",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          Smarter Solutions for a Smarter World
        </h1>
      </div>
      <div className="flex items-center justify-center bg-black pb-8 lg:px-[140px]">
        <div className="grid gap-6 p-4 w-full max-w-7xl grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 ">
          {icons.map(({ img, title, description }, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[index + 2] = el)}
              className={`flex flex-col items-center justify-center p-8 bg-black rounded-md shadow-md text-white transition-opacity duration-1000 ${
                visibleElements.includes(elementsRef.current[index + 2])
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="rounded-xl p-6 mb-5 flex items-center justify-center w-20 h-20 bg-[#0A0D13]">
                <img
                  src={img}
                  alt={title}
                  className="h-20 w-20 mb-2"
                  style={{
                    filter:
                      "invert(51%) sepia(69%) saturate(5784%) hue-rotate(258deg) brightness(100%) contrast(101%)",
                  }}
                />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold mb-5">
                {title}
              </h2>
              <p
                className="text-center text-[#616d7e] opacity-95"
                style={{ lineHeight: 1.4 }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
