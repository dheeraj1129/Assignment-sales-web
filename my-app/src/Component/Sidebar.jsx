import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineDashboard, MdCategory } from "react-icons/md";
import { BiMessageSquareEdit } from "react-icons/bi";
import { SiWebmoney } from "react-icons/si";

function Sidebar() {
  return (
    <>
      <div className="sidebar w-72 text-cyan-50 bg-gray-900 h-full p-4">
        <span className="ml-52 text-xl cursor-pointer">╳ </span>

        <div className="h-12 mb-8 flex w-full font-2xl items-center cursor-pointer hover-bg-blue-700 rounded-2xl">
          <SiWebmoney />
          <h4 className="ml-4"> Shopynow </h4>
        </div>

        <div className="space-y-4 mt-14 block  ">
          <div className="text-xl flex items-center cursor-pointer  hover:bg-blue-700     rounded-2xl justify-between">
            <div className="flex justify-between w-full items-center px-3">
              <div class="flex items-center  ">
                <AiFillHome />
                <span class="ml-4">Home</span>
              </div>
              <h4>></h4>
            </div>
          </div>
          <div className="text-xl flex items-center   hover:bg-blue-700  rounded-2xl justify-between">
            <div className="flex justify-between w-full items-center px-3">
              <div class="flex items-center  ">
                <MdCategory />
                <span class="ml-4">Category</span>
              </div>
              <h4>></h4>
            </div>
          </div>
          <div className="text-xl flex items-center   hover:bg-blue-700  rounded-2xl justify-between">
            <div className="flex justify-between w-full items-center px-3">
              <div class="flex items-center  ">
                <MdOutlineDashboard />
                <span class="ml-4">Dashboard</span>
              </div>
              <h4>></h4>
            </div>
          </div>
          <div className="text-xl flex items-center   hover:bg-blue-700  rounded-2xl justify-between">
            <div className="flex justify-between w-full items-center px-3">
              <div class="flex items-center  ">
                <FaRegMoneyBillAlt />
                <span class="ml-4">Promote</span>
              </div>
              <h4>></h4>
            </div>
          </div>
          <div className="text-xl flex items-center   hover:bg-blue-700  rounded-2xl justify-between">
            <div className="flex justify-between w-full items-center px-3">
              <div class="flex items-center  ">
                <AiFillHome />
                <span class="ml-4">User</span>
              </div>
              <h4>></h4>
            </div>
          </div>
          <div className="text-xl flex items-center   hover:bg-blue-700  rounded-2xl justify-between">
            <div className="flex justify-between w-full items-center px-3">
              <div class="flex items-center  ">
                <BiMessageSquareEdit />
                <span class="ml-4">help</span>
              </div>
              <h4>></h4>
            </div>
          </div>
        </div>
        <div
          className="mt-40 hover:bg-blue-900 mb-28 px-2 rounded-xl flex justify-between 
         items-center  h-14 w-48">
          <img
            src="https://picsum.photos/200/300?grayscale 
"
            alt="...."
            class="w-12 h-12 rounded-3xl"
          />
          <div className="block">
            <h2 className="">Dashboard</h2>
            <p className="text-sm">User Name</p>
          </div>
          <span>+</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
