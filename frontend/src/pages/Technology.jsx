import Functionality from "../component/Technology/Functionality";
import TechHero from "../component/Technology/TechHero";
import SmartContracts from "../component/Home/SmartContracts";
import Developer from "../component/Home/Developer";
import Banner from "../component/Home/Banner";
import WlcmSmart from "../component/Technology/WlcmSmart";

export default function Technology() {
  return (
    <div className="bg-black">
      <TechHero />
      <Functionality />
      <WlcmSmart />
      <SmartContracts />
      <Developer />
      <Banner />
    </div>
  );
}
