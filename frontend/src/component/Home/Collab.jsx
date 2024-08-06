import { useEffect, useRef } from "react";
import "./Collab.css";

const Collab = () => {
  const images = [
    "Collab/img1.svg",
    "Collab/img2.svg",
    "Collab/img3.svg",
    "Collab/img4.svg",
    "Collab/img5.svg",
    "Collab/img6.svg",
    "Collab/img7.svg",
    "Collab/img8.svg",
    "Collab/img9.svg",
    "Collab/img10.svg",
  ];

  const elementsRef = useRef([]);
  elementsRef.current = [];

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up", `delay-${index % 5}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black pt-[200px] pb-16">
      <div
        ref={addToRefs}
        className="text-[#aa55f4] font-thin py-2 px-4 rounded-xl mb-4 border border-[#aa55f4] border-opacity-35 tracking-[2px] text-[15px] transition-opacity duration-1000"
      >
        BACKED BY
      </div>
      <div className="max-w-5xl md:max-w-7xl lg:max-w-5xl mx-auto text-center mb-14">
        <h1
          ref={addToRefs}
          className="title text-4xl md:text-6xl lg:text-[66px] font-medium text-white transition-opacity duration-1000"
          style={{
            lineHeight: "1.1",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          Meet our friends and collaborators
        </h1>
        <p
          ref={addToRefs}
          className="text-[#616d7e] mt-6 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Tincidunt sed amet ullamcorper diam. Diam proin magnis semper egestas
          in faucibus tristique augue. Nec tristique hac.
        </p>
      </div>
      <div className="grid-container sm:px-4 md:px-6">
        {images.map((src, index) => (
          <div key={index} ref={addToRefs} className="grid-item">
            <img
              src={src}
              alt={`Collaborator ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collab;
