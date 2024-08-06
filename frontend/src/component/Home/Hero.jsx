// import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ featuresRef = { current: null } }) => {
  // const [rotation, setRotation] = useState(30);

  // const handleScroll = () => {
  //   const scrollTop = window.pageYOffset;
  //   const maxRotation = 0;
  //   const minRotation = 30;
  //   const maxScroll =
  //     document.documentElement.scrollHeight - window.innerHeight;
  //   const newRotation =
  //     minRotation - (scrollTop / maxScroll) * (minRotation - maxRotation);
  //   setRotation(newRotation);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const handleClick = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-start py-32 px-10 bg-black overflow-hidden">
      <div className="absolute inset-0 top-[-70px] w-full h-[500px] bg-[radial-gradient(circle_farthest-side_at_50%_-170%,_transparent,_black),linear-gradient(to_bottom,_#aa55f4,_transparent)] opacity-[0.8]"></div>
      <div className="max-w-5xl mx-auto px-3 text-center pt-32 pb-8 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-semibold text-white mb-6">
          SmartML Labs
        </h1>
        <p
          className="text-lg md:text-3xl text-[#616d7e] leading-8 mb-8 px-6 md:mx-[80px] text-center opacity-90"
          style={{ lineHeight: "1.5" }}
        >
          The Future, Delivered Today
        </p>

        <button
          className="bg-[#aa55f4] bg-gradient-to-r from-[#aa55f4] to-[#6a1bf0] text-white text-2xl py-3 px-6 rounded-xl shadow-lg duration-300 transform transition-transform hover:bg-[#6a1bf0] hover:scale-95"
          onClick={handleClick}
        >
          Explore
        </button>
      </div>
      {/* <div
        className="figure-a-hero"
        data-w-id="297673ad-47a4-b4b1-8938-0ca16b3d6b41"
      >
        <div
          className="figure-block-a-hero"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          <div className="figure-a1"></div>
          <div className="figure-a2"></div>
          <div className="figure-a3"></div>
        </div>
      </div> */}
    </section>
  );
};

Hero.propTypes = {
  featuresRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Hero;
