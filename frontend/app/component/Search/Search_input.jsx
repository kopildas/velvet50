import React from "react";

const Search_input = ({lebel_name}) => {
  return (
    <div className="group bg-blue-00 w-32">
      <input type="text" required />
      <span className="highlight"></span>
      {/* <span class="bar"></span>  */}
      <label>{lebel_name}</label>
    </div>
  );
};

export default Search_input;
