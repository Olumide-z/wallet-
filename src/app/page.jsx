import CallToAction from "../components/CallToAction";
import CryptoReward from "../components/CryptoReward";
import Explore from "../components/Explore";
import GetStarted from "../components/GetStarted";
import HeroSection from "../components/HeroSection";
import OurPartners from "../components/OurPartners";
import VeBetter from "../components/VeBetter";
import VetBetterApps from "../components/VetBetterApps";
import VeChainSection from "../components/VetChainSection";

export default function Home() {
  return (
    <>
   <HeroSection />
   <OurPartners />
   <CallToAction />
   <VeChainSection />
  <Explore />
   
   <VetBetterApps />
   <VeBetter />
   <GetStarted />
   <CryptoReward />
   </>
  );
}
