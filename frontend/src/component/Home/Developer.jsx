import { useEffect, useRef } from "react";
import "./Developer.css";

const Developer = () => {
  const elementsRef = useRef([null, null, null]);

  useEffect(() => {
    const currentElements = elementsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetIndex = currentElements.indexOf(entry.target);
            if (targetIndex > -1) {
              entry.target.classList.add(`fade-in-delay-${targetIndex}`);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    currentElements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="w-full px-7 md:px-20 lg:px-[140px] bg-black pt-[150px] pb-32">
      <div className="developer-layout">
        {/* Developers Box */}
        <div className="developers p-6 lg:flex lg:flex-col lg:justify-start lg:items-start text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <div
              className="text-[#aa55f4] font-thin py-2 px-4 rounded-xl mb-4 border border-[#aa55f4] border-opacity-35 tracking-[2px] text-[15px] opacity-0"
              ref={(el) => (elementsRef.current[0] = el)}
            >
              What We Do
            </div>
          </div>

          <div className="mb-4">
            <h1
              className="text-4xl md:text-6xl font-medium text-white opacity-0"
              ref={(el) => (elementsRef.current[1] = el)}
            >
              We aim to be a global leader in AI by
            </h1>
          </div>
          <p
            className="text-[#616d7e] text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed  opacity-0 pt-5"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            delivering high-quality, user-friendly, and scalable solutions. Our
            expert team, strategic partnerships, and commitment to continuous
            R&D ensure we stay at the forefront of AI advancements, driving
            progress and creating value for our clients.
          </p>
        </div>

        {/* Figure Box */}
        <div className="figure-c">
          <div className="figure-block-c">
            <div className="figure-c1"></div>
            <div className="figure-c2"></div>
            <div className="figure-c3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
