const TechHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-start py-32 px-10 bg-black overflow-hidden">
      <div className="glow-top absolute inset-0 top-[-70px] w-full h-[500px] bg-[radial-gradient(circle_farthest-side_at_50%_-170%,_transparent,_black),linear-gradient(to_bottom,_#aa55f4,_transparent)] opacity-[0.8]"></div>
      <div className="content single-page mt-[10vh] max-w-[1000px] w-full flex flex-col items-center">
        <div className="block-hero text-center flex flex-col items-center relative z-10">
          <div className=" border-2 border-[#aa55f4] text-[#aa55f4] uppercase text-xs font-medium px-4 py-2 rounded-xl mb-4 tracking-wider">
            TECHNOLOGY
          </div>
          <h1 className=" text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6 ">
            Transforming Tomorrow with AI Solutions
          </h1>
          <p className=" text-[#616d7e] text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
          Unlock the potential of tomorrow with SmartML Labs. Connect with us to explore cutting-edge AI innovations and let’s collaborate to turn visionary ideas into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechHero;
