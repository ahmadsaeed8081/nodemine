import React from "react";

function SliderTile({ img, text = "" }) {
  return (
    <div className="w-[100%] m-[5px] mt-[15px] ml-0 mr-5  min-w-[300px] flex items-start flex-col border border-[#111730] bg-[#0B0D21] rounded-[5px] sm:m-[10px] sm:ml-0 sm:w-[300px]">
      <img src={img} alt="img" />
      <h1 className="font-normal	p-3 ml-2 text-[#FFFFFF] text-base	">{text}</h1>
    </div>
  );
}

export default SliderTile;
