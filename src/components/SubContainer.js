import React from "react";

function SubContainer({ children }) {
  return (
    <div className="bg-[#0B0D21] border border-[#111730] rounded-[5px] my-[10px] px-[14px] py-4">
      {children}
    </div>
  );
}

export default SubContainer;
