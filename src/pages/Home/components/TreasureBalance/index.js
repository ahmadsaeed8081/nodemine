import React from "react";
import SectionHeading from "../../../../components/SectionHeading";
import SubContainer from "../../../../components/SubContainer";

function TreasureBalance(props) {
  return (
    <div className="pb-[10px]">
      <SectionHeading text={"Treasury Balance"} />

      <SubContainer>
        <h2 className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#264DF7] to-[#8080FF] text-3xl font-normal font-Inter	">
{props.treasure_balance}        </h2>
      </SubContainer>
    </div>
  );
}

export default TreasureBalance;
