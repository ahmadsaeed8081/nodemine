import React from "react";

function TableData({ text, alignment }) {
  return (
    <h2
      style={{ textAlign: alignment }}
      className={`${
        "text-" + alignment
      } font-semibold w-[105px] text-[#F9FAFB] text-sm opacity-75 font-Open-Sans`}
    >
      {text}
    </h2>
  );
}

export default TableData;
