import React from "react";
import { IconSearch } from "./Icons";

function InputSearch(props) {
  return (
    <div className="outline-none bg-gray-900 w-full text-white px-4 border border-transparent hover:border-primary font-medium rounded-full py-2 flex items-center group">
      <span className="mr-3">
        <IconSearch size="sm" className="text-gray-400 group-hover:text-primary"/>
      </span>
      <input
        type="text"
        placeholder="Search Twitter"
        className="bg-transparent outline-none"
        {...props}
      ></input>
    </div>
  );
}

export default InputSearch;
