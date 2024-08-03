import AboutContent from "../component/About/AboutContent";
import AboutHero from "../component/About/AboutHero";
import CompanyStats from "../component/About/CompanyStats";
import Team from "../component/About/Team";
import Banner from "../component/Home/Banner";
export default function About() {
  console.log("About component loaded");

  return (
    <div className="bg-black">
      <AboutHero />
      <CompanyStats />
      <AboutContent />
      <Team />
      <Banner />
    </div>
  );
}
