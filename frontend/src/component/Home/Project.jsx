import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="container mx-auto max-w-[1330px] p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 px-[25px] py-4 flex flex-col items-center lg:items-start">
          <div className="flex flex-col space-y-4 w-full lg:w-auto">
            <div className="project text-center lg:text-left lg:mr-32">
              <h3 className="heading-stats text-4xl lg:text-[52px] mb-5 text-white">
                ShadiBanavo
              </h3>
              <div className="text-stats text-xl text-[#616d7e]">
                Launching Soon
              </div>
            </div>
            <div className="project lighter text-center lg:text-left lg:ml-24">
              <h3 className="heading-stats text-4xl lg:text-[52px] mb-5 text-white">
                ShadiBanavo
              </h3>
              <div className="text-stats text-xl text-[#616d7e]">
                Launching Soon
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 px-[25px] py-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="border-2 border-[#aa55f4] text-[#aa55f4] uppercase text-xs font-medium px-4 py-2 rounded-xl mb-4 tracking-wider">
            Ongoing Projects
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6">
            Building The Future
          </h1>
          <p className="text-[#616d7e] text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed lg:pr-8">
            Our project at SmartML Labs is reshaping the real world with
            cutting-edge AI. We're creating innovative solutions to address
            real-world challenges and turn visionary ideas into impactful
            applications. Explore how our work can drive progress and make a
            difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
