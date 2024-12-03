"use client";

import "../Search/Search.css";
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
        <div className="w-1/2 h-full rounded-[3rem] bg-[#FFFFFF] flex gap-5">
          <div className="flex items-center justify-center pl-5">lo</div>
          <div className="flex items-center justify-center ">
            <Search_input lebel_name={Name} />
            <div className="w-[1.5px] h-5 bg-slate-700"></div>
          </div>
          <div className="flex items-center justify-center">
            <Search_input lebel_name={Name} />
            <div className="w-[1.5px] h-5 bg-slate-700"></div>
          </div>
          <div className="flex items-center justify-center">
            <Search_input lebel_name={Name} />
            {/* <div className="w-1 h-4 bg-slate-700"></div> */}
          </div>
        </div>
        <div className="w-[35%] h-full rounded-[3rem] bg-slate-700 flex gap-8">
          <div className="w-[65%] h-full rounded-[3rem] bg-slate-500 flex">
            <div className="flex items-center justify-center pl-5">lo</div>
            <div className="flex items-center justify-center ">
              <Search_input lebel_name={Name} />
              {/* <div className="w-[1.5px] h-5 bg-slate-700"></div> */}
            </div>
          </div>
          <div className="w-[35%] h-full rounded-[3rem] bg-slate-300 flex items-center justify-center">
            {" "}
            Filter
          </div>
        </div>
        <div className="w-[15%] h-full rounded-[3rem] bg-slate-900 flex items-center justify-center">
          <p className="text-slate-50">Search</p>
        </div>
      </div>
    </form>
  );
};

export default Search;
