import React from "react";
import {IconComment, IconRetweet, IconLike, IconShare} from './Icons'

function CardTweet(props) {
  const {imageURL}=props
  return (
    <article className="flex px-4 py-3 border-b border-gray-600">
      <div>
        <img
          className=" w-12 h-12 rounded-full"
          src="https://pbs.twimg.com/profile_images/1087673933141135361/Etr0IszD_bigger.jpg"
        ></img>
      </div>
      <section className="px-4 flex-1">
        <div className="flex">
          <h4 className="mr-2 font-bold">Jayesh Janyani</h4>
          <div className="text-gray-400">@jayeshjanyani</div>
        </div>
        <p className="mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
        {imageURL ? <img className="rounded-l mt-2 border-gray-900" src={imageURL}/>:''}
        <ul className="flex justify-between mr-8 text-sm text-gray-400 mt-4 pr-20">
            <li className=" hover:text-primary"><button className="flex"><IconComment size="sm"/><span className="ml-2">2</span></button></li>
            <li className=" hover:text-primary"><button className="flex"><IconRetweet size="sm"/><span className="ml-2">20</span></button></li>
            <li className=" hover:text-red-900"><button className="flex"><IconLike size="sm"/><span className="ml-2">300</span></button></li>
            <li className=" hover:text-primary"><button className="flex"><IconShare size="sm"/></button></li>
        </ul>
      </section>
    </article>
  );
}

export default CardTweet;



