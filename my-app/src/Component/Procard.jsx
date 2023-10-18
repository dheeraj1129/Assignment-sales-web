import React from "react";

function Procard(props) {
  return (
    <>
      <div class="flex max-w-5xl px-4  justify-between mt-3 h-fit    ml-24">
        <div class="flex w-full h-full  -ml-32 px-4 ">
          <img
            src="https://picsum.photos/200/200"
            alt="error"
            class="h-12 w-12"
          />

          <div className="block ml-2 product41  w-full">
            <h2 className=" text-base font-extrabold product4">{props.text}</h2>
            <p className="text-sm font-semibold product4  ">{props.text2}</p>
          </div>
        </div>

        <div className="flex w-2/4 justify-between product5">
          <h1>{props.text3}</h1>
          <h1>{props.text4}</h1>
          <h1>{props.text5}</h1>
        </div>
      </div>
    </>
  );
}

export default Procard;
