import Search from "../Search/Search";
import '../Hero/Hero.css'
import Star_svg from "./Star_svg";
import Number_box from "./Number_box";
import Printers_svg from "./Printers_svg";
import Insta_svg from "./Insta_svg";
import Tiktok_svg from "./Tiktok_svg";
import Facebook_svg from "./Facebook_svg";
import Arrow_svg from "./Arrow_svg";
import Sm_box_1_svg from "./Sm_box_1_svg";
import Map_svg from "./Map_svg";
import Share_svg from "./Share_svg";
import Red_star_svg from "./Red_star_svg";
import Card_1 from "../UI/Card_1";

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
      <div className="w-full  flex justify-between gap-5 mb-20 mt-10">
        <div className="w-[70%] h-[522px] rounded-[40px] bg-slate-600 hero_img_box relative">
        <div className=" absolute mb-5 ml-6  bottom-0 flex items-center justify-center w-auto gap-5">
        <Number_box number={"1397"} text={"5 Star Happy Reviews"}/>
        <Star_svg/>
        <Number_box number={"32"} text={"Service Locations"}/>
        <Star_svg/>
        <Number_box number={"56+"} text={"Service Categories"}/>
        </div>
        <div className=" absolute mb-5 mr-6  bottom-0 right-0 bg-red-00 flex items-center justify-center w-auto gap-5 h-[82px]">
          <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_1"><Printers_svg/></div>
          <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_1"><Insta_svg/></div>
          <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_1"><Tiktok_svg/></div>
          <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_1"><Facebook_svg/></div>
        </div>

        </div>
        
        {/* <div className="w-[30%] h-[622px] rounded-[40px] bg-slate-400">
          <div className="w-full h-1/2 rounded-t-[40px] bg-red-00 relative hero_img_box_2">
            <div className="w-12 h-12 bg-black absolute mt-5 mr-5 rounded-full right-0 flex items-center justify-center"><Arrow_svg/></div>
            <div className="absolute mb-5 mr-6  bottom-0 right-0 bg-red-00 flex items-center justify-center w-auto gap-2"><div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_2 border-[#DDDDDD1A]"><Printers_svg/></div>
          <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_2 border-[#DDDDDD1A]"><Insta_svg/></div>
          <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_2 border-[#DDDDDD1A]"><Tiktok_svg/></div>
          <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_2 border-[#DDDDDD1A]"><Facebook_svg/></div></div>
          </div>
          <div className="w-full h-1/2 rounded-b-[40px] bg-[#FFFFFF] text-slate-600 flex flex-col  px-7">
            <div className="flex items-start justify-between  pt-12">
              <p className="hr_img_text_1">Nadia Alex</p>
              <p className="hr_img_text_2">Service: <span className="hr_img_text_3">Nail Care</span></p>
            </div>
            <div className="flex items-start justify-between text-[#4E4E4E] pt-5">
              <div className="flex gap-2"><Sm_box_1_svg/> <p className="hr_img_text_4"><span className="hr_img_text_7 pr-2">450</span>(Got Booked the most)</p></div>
              <div className="flex gap-2"><Red_star_svg/> <p className="hr_img_text_5">(456)</p></div>
            </div>
            <div className="flex items-start  text-[#4E4E4E] pt-5">
              <div className="flex gap-2"><Map_svg/> <p className="text-xs hr_img_text_6">
                6 Pervice Notre-Dome-754 Texus, USA(1km away)
              </p></div>
            </div>
            <div className="flex items-start  text-[#4E4E4E] pt-5">
              <div className="flex gap-2"><Share_svg/><a href=""><p className="text-xs hr_img_text_8">nata_#456rvis ame</p></a></div>
            </div>
            <div className=" mt-12 flex items-center justify-center book_service_btn">
              <p className="book_srv_txt">Book Service</p>
            </div>
          </div>
        </div> */}

        <Card_1/>
      </div>

      {/* Slider */}
      <div className="slider mt-20 mb-10">
        <div className="list">
          {/* Map over the original array */}
          {services.map((service, index) => (
            <div key={index} className="item flex items-center justify-center">
              <div className="px-5 py-4 text-[#a6a6a6] slide_one_text">{service}</div>
            </div>
          ))}

          {/* Duplicate items for seamless looping */}
          {services.map((service, index) => (
            <div key={index} className="item flex items-center justify-center">
              <div className="px-5 py-4 text-[#a6a6a6] slide_one_text">{service}</div>
            </div>
          ))}
        </div>
      </div>




    </div>
  );
};

export default Hero;
