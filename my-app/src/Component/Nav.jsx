import React from "react";

function Nav({ logo, heading, like, increase }) {
  return (
    <div className="  container3  mt-1  justify-between items-center  w-full ">
      <div className="flex  w-fit h-32 justify-between items-center shadow-gray-400 shadow-lg rounded-xl box-container bg-white">
        {/* box1 */}
        <div className="font-bold text-7xl   scale-1 transform-scale px-3">
          <div className="text-7xl">{logo}</div>
        </div>

        <div className="block px-2">
          <p className="text-xs text-yellow-500">{heading}</p>
          <h2 className="font-semibold text-xl">{like}</h2>
          <h6 className="text-xs font-bold">{increase}</h6>
        </div>
      </div>
    </div>
  );
}

export default Nav;
