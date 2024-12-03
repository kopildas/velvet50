import Search from "../Search/Search";
import '../Hero/Hero.css'

const Hero = () => {
  const services = [
    "MAKEUP",
    "BROWS",
    "BODY WAX",
    "HAIR REMOVAL",
    "BARBER",
    "ELECTROLYSIS",
    "NAIL TECH",
    "TATTOO",
    "MAKEUP",
    "BROWS",
    "BODY WAX",
    "HAIR REMOVAL",
    "BARBER",
    "ELECTROLYSIS",
    "NAIL TECH",
    "TATTOO",
    "MAKEUP",
    "BROWS",
    "BODY WAX",
    "HAIR REMOVAL",
    "BARBER",
    "ELECTROLYSIS",
    "NAIL TECH",
    "TATTOO",
  ];

  return (
    <div className="px-32 pt-20">
      <div className="bg-[#E0D6CF] direcroey_btn_1 w-fit">
        <p className="direcroey_btn_1_txt">DIRECTORY</p>
      </div>
      <div className="w-fit flex flex-col text-[40px] pt-2 hero_h1">
        <h1>Small Budget, Big Impact. Find Your Hidden <br />
        Gem at <span className="velvet_italic">Velvet 50</span>  with Beauty & Self-Care <br />
        Services Under $50</h1>
      </div>
      <Search />
      <div className="w-full  flex gap-5 mb-20 mt-10">
        <div className="w-[70%] h-[622px] rounded-[40px] bg-slate-600 hero_img_box"></div>
        <div className="w-[30%] h-[622px] rounded-[40px] bg-slate-400">
          <div className="w-full h-1/2 rounded-t-[40px] bg-red-200 relative">
            <div className="w-12 h-12 bg-black absolute mt-5 mr-5 rounded-full right-0"></div>
          </div>
          <div className="w-full h-1/2 rounded-b-[40px] bg-red-100 text-slate-600 flex flex-col  px-5">
            <div className="flex items-start justify-between text-slate-600">
              <p>Nadia Alex</p>
              <p>Service: Nail Care</p>
            </div>
            <div className="flex items-start justify-between text-slate-600">
              <p>450 (Got Booked the most)</p>
              <p>(456)</p>
            </div>
            <div className="flex items-start  text-slate-600">
              <p className="text-xs">
                6 Pervice Notre-Dome-754 Texus, USA(1km away)
              </p>
            </div>
            <div className="flex items-start  text-slate-600">
              <p className="text-xs">nata_#456rvis ame</p>
            </div>
            <div className="w-full h-10 bg-black rounded-3xl flex items-center justify-center">
              <p>Book Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="slider mt-20 mb-10">
        <div className="list">
          {/* Map over the original array */}
          {services.map((service, index) => (
            <div key={index} className="item">
              <div className="px-10 py-2 text-[#a6a6a6]">{service}</div>
            </div>
          ))}

          {/* Duplicate items for seamless looping */}
          {services.map((service, index) => (
            <div key={index + services.length} className="item">
              <div className="px-10 py-2 text-[#a6a6a6]">{service}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
