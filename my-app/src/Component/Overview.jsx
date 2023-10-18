import React from "react";

function Overview() {
  return (
    <div className="flex mt-4 justify-between items-center w-11/12 container">
      <div
        className="bg-white max-h-fit w-4/6 flex flex-col overview1
      justify-center items-center rounded-2xl shadow-gray-400 shadow-lg">
        <div className="flex justify-between w-5/6 m-3  ">
          <div className="block w-full">
            <h1 className="text-xl font-black border-l-gray-950">Overview</h1>
            <p className="text-xs text-red-500 font-medium">Monthly Earnings</p>
          </div>
          <h3
            className="text-xs text-black hover:text-white font-black cursor-pointer
          w-36 bg-slate-200 hover:bg-slate-800 rounded-xl flex items-center justify-evenly">
            Quality<span>></span>
          </h3>
        </div>

        <div className="w-5/6 mb-0 ">
          <div className="flex w-full h-32 justify-between overview2 items-end   mb-3">
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800   rounded-lg cursor-pointer  h-14"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-12"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-16"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-20"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-8"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-20"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-14"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-28"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-24"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-20"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-28"></div>
            <div className="barside w-8 justify-end bg-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer  h-12"></div>
          </div>
        </div>

        <div className=" barside2 flex w-5/6 text-xs font-black justify-between">
          {[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ].map((month) => (
            <h2 key={month}>{month}</h2>
          ))}
        </div>
      </div>

      <div className="bg-white h-52 overview3 rounded-xl block justify-center shadow-gray-400 shadow-lg items-center">
        <div className="px-4">
          <h2 className="font-black w-48">Customers</h2>
          <h3 className="text-xs">Customers That product</h3>
        </div>
        <div className="flex mx-auto mt-8 justify-center items-center bg-slate-300 border-10 border-red-500 rounded-full h-20 w-20">
          <h3 className="text-2xl font-bold">33%</h3>
        </div>
      </div>
    </div>
  );
}

export default Overview;
