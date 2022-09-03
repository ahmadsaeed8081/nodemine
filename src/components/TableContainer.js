import React from "react";

function TableContainer({ children }) {
  return (
    <div className="w-full overflow-auto tableWrapper bg-[#0B0D21] border border-[#111730] rounded-[5px] max-w-full	w-full my-[10px]">
      {children}
    </div>
  );
}

export default TableContainer;
