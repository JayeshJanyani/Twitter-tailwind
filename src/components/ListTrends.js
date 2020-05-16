import React from "react";

function ListTrends() {
  return (
    <section className="bg-gray-500 rounded-xl">
      <div className="px-5 py-2 border-b border-gray-600 ">
        <h4 className="text-lg font-bold">What's happening</h4>
      </div>
      <ul>
        <li className="px-5 py-2 hover:bg-gray-900  border-b border-gray-600">
          <div>
            <span className="text-gray-400">Technology</span>
            <h6 className="text-lg font-medium"> #technicalGuruji</h6>
            <span className="text-gray-400"> 36 tweets</span>
          </div>
          <span></span>
        </li>
        <li className="px-5 py-2 hover:bg-gray-900  border-b border-gray-600">
          <div>
            <span className="text-gray-400">Technology</span>
            <h6 className="text-lg font-medium"> #technicalGuruji</h6>
            <span className="text-gray-400"> 36 tweets</span>
          </div>
          <span></span>
        </li>
        <li className="px-5 py-2 hover:bg-gray-900  border-b border-gray-600">
          <div>
            <span className="text-gray-400">Technology</span>
            <h6 className="text-lg font-medium"> #technicalGuruji</h6>
            <span className="text-gray-400"> 36 tweets</span>
          </div>
          <span></span>
        </li>
      </ul>
      <button className="px-5 py-2 hover:bg-gray-900 rounded-b-xl w-full text-left text-primary border-b border-gray-600">Show more</button>
    </section>
  );
}

export default ListTrends;
