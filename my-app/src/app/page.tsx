import Image from "next/image";
import ProductUi from "./Components/ui/ProductUi";
import LandingBar from "./Components/ui/LandingBar";
import HeroSection from "./Components/ui/HeroSection";
import ClientUi from "./Components/ui/ClientReview";
import AnnouncementSlider from "./Components/ui/AnnouncementSlider";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <LandingBar />
      <ProductUi />
      <ClientUi/>
    </>
  );
}
