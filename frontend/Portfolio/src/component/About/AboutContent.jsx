import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const elements = [headingRef.current, paragraphRef.current];

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
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-32 px-4">
      <div className="w-full max-w-[720px]">
        <h1
          ref={headingRef}
          className="text-3xl font-bold mb-6 text-white md:text-5xl"
        >
         At SmartML Labs,
        </h1>
        <p
          ref={paragraphRef}
          className="text-lg text-[#616d7e] leading-relaxed"
        >
          we revolutionize industries and enrich daily life through cutting-edge AI. Our goal is to harness advanced technology for delivering insightful analytics, smart automation, personalized support, and predictive solutions across healthcare, finance, retail, manufacturing, and education. We are dedicated to innovation, integrity, and customer satisfaction, ensuring our AI solutions are ethical and impactful.
          <br />
          <br />
          Our vision is to become a global leader in AI by providing high-quality, intuitive, and scalable solutions. Through our expert team, strategic collaborations, and relentless R&D efforts, we remain at the forefront of AI advancements, driving progress and creating substantial value for our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
