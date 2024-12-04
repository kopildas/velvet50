import React from 'react'
import Arrow_svg from '../Hero/Arrow_svg'
import Printers_svg from '../Hero/Printers_svg'
import Insta_svg from '../Hero/Insta_svg'
import Tiktok_svg from '../Hero/Tiktok_svg'
import Facebook_svg from '../Header/Facebook_svg'
import Sm_box_1_svg from '../Hero/Sm_box_1_svg'
import Red_star_svg from '../Hero/Red_star_svg'
import Map_svg from '../Hero/Map_svg'
import Share_svg from '../Hero/Share_svg'

const Card_1 = () => {
  return (
    <div className="w-[370px] h-[522px] rounded-[40px] bg-slate-400">
    <div className="w-full h-1/2 rounded-t-[40px] bg-red-00 relative hero_img_box_2">
      <div className="w-12 h-12 bg-black absolute mt-5 mr-5 rounded-full right-0 flex items-center justify-center"><Arrow_svg/></div>
      <div className="absolute mb-5 mr-6  bottom-0 right-0 bg-red-00 flex items-center justify-center w-auto gap-2"><div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_2 border-[#DDDDDD1A]"><Printers_svg/></div>
    <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_2 border-[#DDDDDD1A]"><Insta_svg/></div>
    <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_2 border-[#DDDDDD1A]"><Tiktok_svg/></div>
    <div className="rounded-full cursor-pointer hover:scale-110 transition duration-150 ease-in-out social_box_2 border-[#DDDDDD1A]"><Facebook_svg/></div></div>
    </div>
    <div className="w-full h-1/2 rounded-b-[40px] bg-[#FFFFFF] text-slate-600 flex flex-col  px-5">
      <div className="flex items-start justify-between  pt-8">
        <p className="hr_img_text_1">Nadia Alex</p>
        <p className="hr_img_text_2">Service: <span className="hr_img_text_3">Nail Care</span></p>
      </div>
      <div className="flex items-start justify-between text-[#4E4E4E] pt-3">
        <div className="flex gap-2"><Sm_box_1_svg/> <p className="hr_img_text_4"><span className="hr_img_text_7 pr-2">450</span>(Got Booked the most)</p></div>
        <div className="flex gap-2"><Red_star_svg/> <p className="hr_img_text_5">(456)</p></div>
      </div>
      <div className="flex items-start  text-[#4E4E4E] pt-3">
        <div className="flex gap-2"><Map_svg/> <p className="text-xs hr_img_text_6">
          6 Pervice Notre-Dome-754 Texus, USA(1km away)
        </p></div>
      </div>
      <div className="flex items-start  text-[#4E4E4E] pt-3">
        <div className="flex gap-2"><Share_svg/><a href=""><p className="text-xs hr_img_text_8">nata_#456rvis ame</p></a></div>
      </div>
      <div className=" mt-12 flex items-center justify-center book_service_btn">
        <p className="book_srv_txt">Book Service</p>
      </div>
    </div>
  </div>
  )
}

export default Card_1
