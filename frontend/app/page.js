import Image from "next/image";
import Hero from "./component/Hero/Hero";
import About_section from "./component/About_section/About_section";
import Service_Providers from "./component/Service_Providers/Service_Providers";

export default function Home() {
  return (
    <div className="h-auto w-full">
      <Hero/>
      <About_section/>
      <Service_Providers/>
    </div>
  );
}
