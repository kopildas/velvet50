import Image from "next/image";
import Hero from "./component/Hero/Hero";
<<<<<<< HEAD
import About_section from "./component/About_section/About_section";
import Service_Providers from "./component/Service_Providers/Service_Providers";
=======
import PromotionCard from "./component/PromotionCard/PromotionCard";
>>>>>>> a1a7470700f771b23f6784811c1280d3b084d29e

export default function Home() {
  return (
    <div className="h-auto w-full">
      <Hero/>
      <About_section/>
      <Service_Providers/>
    </div>
  );
}
