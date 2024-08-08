import { useEffect, useRef } from "react";
import "./Smart.css";

const SmartContracts = () => {
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
    <div className="mx-auto max-w-[1300px] p-[120px_40px] bg-black pt-[150px] pb-32">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Contracts Box */}
        <div className="p-6 lg:flex lg:flex-col lg:justify-start lg:items-start text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <div
              className="text-[#aa55f4] font-thin py-2 px-4 rounded-xl mb-4 border border-[#aa55f4] border-opacity-35 tracking-[2px] text-[13px] opacity-0"
              ref={(el) => (elementsRef.current[0] = el)}
            >
              About Us
            </div>
          </div>

          <div className="mb-4">
            <h1
              className="text-4xl md:text-6xl lg:text-[66px]  font-medium text-white  opacity-0"
              ref={(el) => (elementsRef.current[1] = el)}
            >
              We at SmartML Labs,
            </h1>
          </div>
          <p
            className="text-[#616d7e] text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed lg:mr-20 opacity-0 pt-5 "
            ref={(el) => (elementsRef.current[2] = el)}
          >
            transform industries and enhance everyday life. Our mission is to
            leverage cutting-edge AI technology to provide advanced analytics,
            smart automation, personalized assistants, and predictive modeling
            across healthcare, finance, retail, manufacturing, and education
            sectors. With a focus on innovation, integrity, customer-centricity,
            and ethical AI
          </p>
        </div>

        {/* fig Box */}
        <div className="figure-b ">
          <div className="figure-block-b">
            <div className="figure-b1"></div>
            <div className="figure-b2"></div>
            <div className="figure-b3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartContracts;
