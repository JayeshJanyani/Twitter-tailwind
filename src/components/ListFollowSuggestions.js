import React from "react";
import SecondaryButton from "./SecondaryButton";

function ListFollowSuggestions() {
  return (
    <section className="bg-gray-500 rounded-xl">
      <div className="px-5 py-2 border-b border-gray-600 ">
        <h4 className="text-lg font-bold">Who to follow</h4>
      </div>
      <ul>
        <li className="px-5 py-2 hover:bg-gray-900 border-b border-gray-600 flex items-center">
          <div>
            <img
              className=" w-12 h-12 rounded-full"
              src="https://pbs.twimg.com/profile_images/1087673933141135361/Etr0IszD_bigger.jpg"
            ></img>
          </div>
          <div className="flex-1 pl-2 pr-1">
            <h6 className="text-lg"> Kelly Vaughn</h6>
            <span className="text-gray-400">@kelly</span>
          </div>
          <SecondaryButton>Follow</SecondaryButton>
        </li>{" "}
        <li className="px-5 py-2 hover:bg-gray-900 border-b border-gray-600 flex items-center">
          <div>
            <img
              className=" w-12 h-12 rounded-full"
              src="https://pbs.twimg.com/profile_images/1087673933141135361/Etr0IszD_bigger.jpg"
            ></img>
          </div>
          <div className="flex-1 pl-2 pr-1">
            <h6 className="text-lg"> Kelly Vaughn</h6>
            <span className="text-gray-400">@kelly</span>
          </div>
          <SecondaryButton>Follow</SecondaryButton>
        </li>
      </ul>
      <button className="px-5 py-2 hover:bg-gray-900 rounded-b-xl w-full text-left text-primary border-b border-gray-600">
        Show more
      </button>
    </section>
  );
}

export default ListFollowSuggestions;
