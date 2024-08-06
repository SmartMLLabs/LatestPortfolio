import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyStats = () => {
  const missionRef = useRef(null);
  const roleRef = useRef(null);
  const valuesRef = useRef(null);
  const walletRef = useRef(null);
  const volumeRef = useRef(null);
  const assetsRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    const elements = [
      missionRef.current,
      roleRef.current,
      valuesRef.current,
      walletRef.current,
      volumeRef.current,
      assetsRef.current,
      partnersRef.current,
    ];

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-black">
      <div className="container mx-auto max-w-[1200px] p-4">
        <div className="grid gap-6 mb-8 lg:grid-cols-2">
          <div
            ref={missionRef}
            className="bg-gradient-to-br from-[rgba(29,40,56,0.5)] to-[rgba(29,40,56,0.25)] rounded-lg p-10 flex flex-col items-start min-h-[370px]"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/6143d809c6921d2a31ab569f_icon%207.svg"
                alt="Our Mission"
                className="w-8 h-8 mr-4"
                style={{
                  filter:
                    "invert(51%) sepia(69%) saturate(5784%) hue-rotate(258deg) brightness(100%) contrast(101%)",
                }}
              />
              <h5 className="text-white text-2xl md:text-4xl font-medium">
                Our Mission
              </h5>
            </div>
            <p className="text-[#616d7e] text-lg">
            Our mission at SmartML Labs is to develop advanced AI solutions that simplify complex tasks, boost productivity, and foster meaningful connections, transforming business operations and enhancing user experiences through intelligent automation and personalized interactions.
            </p>
          </div>
          <div
            ref={roleRef}
            className="bg-gradient-to-br from-[rgba(29,40,56,0.5)] to-[rgba(29,40,56,0.25)] rounded-lg p-10 flex flex-col items-start min-h-[370px]"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/6143d809e40d2e663f8af3cf_icon%208.svg"
                alt="Our Role"
                className="w-8 h-8 mr-4"
                style={{
                  filter:
                    "invert(51%) sepia(69%) saturate(5784%) hue-rotate(258deg) brightness(100%) contrast(101%)",
                }}
              />
              <h5 className="text-white text-2xl md:text-4xl font-medium">
                Our Vision
              </h5>
            </div>
            <p className="text-[#616d7e] text-lg">
            our vision is to create a world where AI enriches lives by simplifying tasks, fostering meaningful connections, and unlocking human potential, leading to a more connected, efficient, and inspired future.
            </p>
          </div>
        </div>
        {/* <div className="grid gap-6 mb-8 lg:grid-cols-3 md:grid-cols-2">
          <div
            ref={valuesRef}
            className="bg-gradient-to-br from-[rgba(29,40,56,0.5)] to-[rgba(29,40,56,0.25)] rounded-lg p-10 flex flex-col items-start lg:row-span-2 lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/6143d8094ffeae993a69429f_icon%209.svg"
                alt="Our Values"
                className="w-8 h-8 mr-4"
                style={{
                  filter:
                    "invert(51%) sepia(69%) saturate(5784%) hue-rotate(258deg) brightness(100%) contrast(101%)",
                }}
              />
              <h5 className="text-white text-2xl md:text-4xl font-medium">
                Our Values
              </h5>
            </div>
            <p className="text-[#616d7e] text-lg">
              Odio cursus rhoncus, ultricies eleifend enim. Diam feugiat
              elementum nulla magnis. Mauris aliquam consectetur.
            </p>
          </div>
          <div
            ref={walletRef}
            className="bg-gradient-to-br from-[rgba(29,40,56,1)] to-[rgba(29,40,56,0.25)] rounded-lg p-10 flex flex-col items-start justify-center"
          >
            <h4 className="text-white text-4xl font-medium mb-2">1.8M+</h4>
            <div className="text-[#616d7e] text-lg">Wallet Installs</div>
          </div>
          <div
            ref={volumeRef}
            className="bg-gradient-to-br from-[rgba(29,40,56,1)] to-[rgba(29,40,56,0.25)] rounded-lg p-10 flex flex-col items-start justify-center"
          >
            <h4 className="text-white text-4xl font-medium mb-2">58.3M</h4>
            <div className="text-[#616d7e] text-lg">Marketplace Volume</div>
          </div>
          <div
            ref={assetsRef}
            className="bg-gradient-to-br from-[rgba(29,40,56,1)] to-[rgba(29,40,56,0.25)] rounded-lg p-10 flex flex-col items-start justify-center"
          >
            <h4 className="text-white text-4xl font-medium mb-2">2.4B</h4>
            <div className="text-[#616d7e] text-lg">Created Assets</div>
          </div>
          <div
            ref={partnersRef}
            className="bg-gradient-to-br from-[rgba(29,40,56,1)] to-[rgba(29,40,56,0.25)] rounded-lg p-10 flex flex-col items-start justify-center"
          >
            <h4 className="text-white text-4xl font-medium mb-2">120+</h4>
            <div className="text-[#616d7e] text-lg">Partners Worldwide</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CompanyStats;
