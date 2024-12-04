"use client";

import "../Search/Search.css";
import Filter_svg from "./Filter_svg";
import Hair_cut_svg from "./Hair_cut_svg";
import Location_svg from "./Location_svg";
import Search_box_svg from "./Search_box_svg";
import Search_input from "./Search_input";

const Search = () => {
  async function onSubmit() {
    Event.preventDefault();

    // const formData = new FormData(event.currentTarget)
    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })

    // Handle response if necessary
    // const data = await response.json()
    // ...
  }

  const Name = "Name";

  return (
    <form onSubmit={onSubmit}>
      <div className="w-full h-24 p-2 flex gap-8 border border-[#D9D6D6] rounded-[3rem] mt-10">
        <div className="w-1/2 h-full rounded-[3rem] bg-[#FFFFFF] flex gap-5 items-center justify-around px-5 ">
         <div className="flex w-auto h-auto items-center justify-start bg-red-00 ">
            <div className="w-10 h-10 bg-[#F1E9E5] rounded-full flex items-center justify-center"><Location_svg/></div>
         </div>
          <div className="flex w-[30%] items-center justify-start bg-red-00 ">
            <Search_input lebel_name={"City"} />
            <div className="w-[1.5px] h-5 bg-slate-00"></div>
          </div>
          <div className="flex w-[30%] items-center justify-start">
            <Search_input lebel_name={"State"} />
            <div className="w-[1.5px] h-5 bg-slate-00"></div>
          </div>
          <div className="flex w-[30%] items-center justify-start">
            <Search_input lebel_name={"Zip Code"} />
            {/* <div className="w-1 h-4 bg-slate-700"></div> */}
          </div>
        </div>
        <div className="w-[35%] h-full rounded-[3rem] bg-slate-00 flex gap-8">
          <div className="w-[65%] h-full rounded-[3rem] bg-[#FFFFFF] flex px-5">
          <div className="flex w-auto h-auto items-center justify-start bg-red-00 ">
            <div className="w-10 h-10 bg-[#F1E9E5] rounded-full flex items-center justify-center"><Hair_cut_svg/></div>
         </div>
          <div className="flex w-[30%] items-center justify-start bg-red-00 px-5">
            <Search_input lebel_name={"Service"} />
            <div className="w-[1.5px] h-5 bg-slate-00"></div>
          </div>
          </div>
          <div className="w-[35%] h-full rounded-[3rem] bg-[#FFFFFF] flex items-center justify-center gap-3">
          
          <div className="flex w-[30%] items-center justify-start bg-red-00">
            {/* <Search_input lebel_name={"Filter"} /> */}
            <div className="filter_txt_css">Filter</div>
          </div>

          <div className="flex w-auto h-auto items-center justify-start bg-red-00 ">
            <div className="w-10 h-10 bg-[#F1E9E5] rounded-full flex items-center justify-center"><Filter_svg/></div>
         </div>

          </div>
        </div>
        <div className="w-[15%] h-full rounded-[3rem] bg-[#171717] flex items-center justify-center gap-[12px]">
          <p className="text-[#FFFFFF] search_txt">Search</p>
          <Search_box_svg/>
        </div>
      </div>
    </form>
  );
};

export default Search;
