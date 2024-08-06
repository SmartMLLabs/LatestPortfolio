import { useRef } from "react";
import Features from "../component/Home/Features";
import SmartContracts from "../component/Home/SmartContracts";
import Stats from "../component/Home/Stats";
import Collab from "../component/Home/Collab";
import Developer from "../component/Home/Developer";
import Banner from "../component/Home/Banner";
import Hero from "../component/Home/Hero";

export default function Home() {
  const featuresRef = useRef(null);

  return (
    <div className="bg-black">
      <Hero featuresRef={featuresRef} />
      <div ref={featuresRef}>
        <Features />
      </div>
      <SmartContracts />
      <Stats />
      {/* <Collab /> */}
      <Developer />
      <Banner />
    </div>
  );
}
