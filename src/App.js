import React from "react";
import {
  IconTwitterLogo,
  IconHome,
  IconExplore,
  IconNotifications,
  IconMessages,
} from "./components/Icons";
import ComposeTweet from "./components/ComposeTweet";
import CardTweet from "./components/CardTweet";
import InputSearch from "./components/InputSearch";
import ListTrends from "./components/ListTrends";
import ListFollowSuggestions from "./components/ListFollowSuggestions";

function App() {
  return (
    <div
      className="grid grid-cols-3 mx-24 min-h-screen "
      style={{ gridTemplateColumns: "250px 1fr 350px" }}
    >
      <nav className="fixed">
        <div className="mt-4 mb-8 ml-4">
          <IconTwitterLogo size="xl" />
        </div>
        <ul>
          <li className="mb-6 ">
            <a href="#" className="font-bold group block">
              <span className="inline-block">
                <span className=" flex items-center group-hover:bg-gray-900 group-hover:text-primary px-4 py-2 rounded-full">
                  <span>
                    <IconHome size="lg" />
                  </span>
                  <span className="ml-4 text-lg">Home</span>
                </span>
              </span>
            </a>
          </li>
          <li className="mb-6 ">
            <a href="#" className="font-bold group block">
              <span className="inline-block">
                <span className=" flex items-center group-hover:bg-gray-900 group-hover:text-primary px-4 py-2 rounded-full">
                  <span>
                    <IconExplore size="lg" />
                  </span>
                  <span className="ml-4 text-lg">Explore</span>
                </span>
              </span>
            </a>
          </li>
          <li className="mb-6 ">
            <a href="#" className="font-bold group block">
              <span className="inline-block">
                <span className=" flex items-center group-hover:bg-gray-900 group-hover:text-primary px-4 py-2 rounded-full">
                  <span>
                    <IconNotifications size="lg" />
                  </span>
                  <span className="ml-4 text-lg">Notifications</span>
                </span>
              </span>
            </a>
          </li>
          <li className="mb-6 ">
            <a href="#" className="font-bold group block">
              <span className="inline-block">
                <span className=" flex items-center group-hover:bg-gray-900 group-hover:text-primary px-4 py-2 rounded-full">
                  <span>
                    <IconMessages size="lg" />
                  </span>
                  <span className="ml-4 text-lg">Messages</span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div>{/*empty div to prevent overlap */}</div>
      <main className="min-h-screen border-l border-r border-gray-600">
        <header className="text-xl font-bold flex justify-between px-4  py-3 border-b border-gray-600">
          <span>Home</span>
          <IconExplore />
        </header>
        <ComposeTweet />
        <div className="h-2 bg-gray-900"></div>
        <CardTweet imageURL="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"/>
        <CardTweet />
        <CardTweet />
        <CardTweet />
      </main>
      <aside className="pl-4">
        <div className="mt-2">
          <InputSearch />
        </div>
        <div className="mt-4">
          <ListTrends />
        </div>
        <div className="mt-4">
          <ListFollowSuggestions />
        </div>
      </aside>
    </div>
  );
}

export default App;
