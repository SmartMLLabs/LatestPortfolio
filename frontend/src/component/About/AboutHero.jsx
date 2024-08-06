const AboutHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-start py-32 px-10 bg-black overflow-hidden">
      <div className="glow-top absolute inset-0 top-[-70px] w-full h-[500px] bg-[radial-gradient(circle_farthest-side_at_50%_-170%,_transparent,_black),linear-gradient(to_bottom,_#aa55f4,_transparent)] opacity-[0.8]"></div>
      <div className="content single-page mt-[10vh] max-w-[900px] w-full flex flex-col items-center pb-0 md:pb-10">
        <div className="block-hero text-center flex flex-col items-center relative z-10">
          <div className=" border-2 border-[#aa55f4] text-[#aa55f4] uppercase text-xs font-medium px-4 py-2 rounded-xl mb-4 tracking-wider">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6 ">
            Who We Are and What Drives Us
          </h1>
          <p className=" text-[#616d7e] text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
          we are passionate innovators dedicated to harnessing AI and machine learning to solve real-world challenges and shape a smarter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
