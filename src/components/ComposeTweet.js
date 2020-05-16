import React from "react";

import {
  IconImage,
  IconGIF,
  IconPoll,
  IconEmoji,
  IconProgress,
  IconCirclePlus,
} from "./Icons.js";

import PrimaryButton from "./PrimaryButton";

function ComposeTweet() {
  return (
    <div className="flex px-4 py-3">
      <div className="mr-4">
        <img
          className=" w-12 h-12 rounded-full"
          src="https://pbs.twimg.com/profile_images/1087673933141135361/Etr0IszD_bigger.jpg"
        ></img>
      </div>
      <div className="flex-1">
        <div>
          <textarea
            className="bg-transparent text-lg outline-none min-w-full"
            placeholder="What's happening?"
            style={{ resize: "none" }}
            
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex text-sm text-primary">
            <li className="mr-4">
              <IconImage />
            </li>
            <li className="mr-4">
              <IconGIF />
            </li>
            <li className="mr-4">
              <IconPoll />
            </li>
            <li className="mr-4">
              <IconEmoji />
            </li>
          </ul>
          <ul className="flex text-sm items-center text-primary">
            <li className="mr-4">
              <IconProgress />
            </li>
            <li className="mr-4">
              <IconCirclePlus className="border border-primary rounded-full" />
            </li>
            <li>
            <PrimaryButton>
            Tweet</PrimaryButton>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default ComposeTweet;
