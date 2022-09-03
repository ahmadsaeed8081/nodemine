import React from "react";

function TableHeading({ text = "", alignment = "" }) {
  return (
    <h2
      style={{ textAlign: alignment }}
      className={`${
        "text-" + alignment
      } w-[105px] font-Open-Sans font-semibold text-sm leading-4 text-[#9CA3AF]`}
    >
      {text && text}
    </h2>
  );
}

export default TableHeading;
