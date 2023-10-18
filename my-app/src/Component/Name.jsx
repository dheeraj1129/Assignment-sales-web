import React from "react";
import { RiMoneyPoundBoxFill } from "react-icons/ri"; // Importing GrNotes from react-icons/ri
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { SiNewjapanprowrestling } from "react-icons/si";
import { GrNotes } from "react-icons/gr";
import Nav from "./Nav";

function Name() {
  return (
    <>
      <div className=" name w-5/6 h-16 justify-between ml-10 flex items-center  ">
        <h2 className="font-medium text-base">Hello, Dheeraj</h2>
        <input
          className="h-6 w-max rounded-lg text-sm px-3 border-transparent "
          placeholder="Search"
        />
      </div>
      <div className="justify-between container flex  items-center ">
        <Nav
          heading="Earning"
          like="$22k"
          increase="↑ 32.5% this month"
          logo={
            <RiMoneyPoundBoxFill className="  text-red-900  cursor-pointer " />
          }
        />
        <Nav
          heading="Order"
          like="$12k"
          increase="↑ 12.5% this month"
          logo={<GrNotes />}
        />
        <Nav
          heading="Balance"
          like="$8k"
          increase="↓ 66.5% this month"
          logo={<MdOutlineAccountBalanceWallet />}
        />
        <Nav
          heading="Total Sales"
          like="$89k"
          increase="↑ 2.5% this month"
          logo={<SiNewjapanprowrestling />}
        />
      </div>
    </>
  );
}

export default Name;
