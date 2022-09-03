import React, { useState } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import SectionHeading from "../../../../components/SectionHeading";
import TableContainer from "../../../../components/TableContainer";
import TableHeading from "../../../../components/TableHeading";
const data = [
  {
    option1: "VaporNodes",
    option2: "465,563.56 VPND",
    detail:
      " Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam.",
  },
  {
    option1: "Hive",
    option2: "3 Worker Bees",
    detail:
      " Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam.",
  },
  {
    option1: "Hive",
    option2: "2 Baby Bears (sitting)",
    detail:
      " Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam.",
  },
];

const Details = ({ e }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="bg-[#0B0D21] cursor-pointer text-[#F9FAFB] py-3 px-[30px] border-b border-[#121428] font-Open-Sans">
      <div
        // onClick={() => {
        //   setIsClicked((isClicked) => !isClicked);
        // }}
        className=" flex justify-between "
      >
        <span className="font-semibold w-[105px] text-[#F9FAFB] text-sm opacity-75">
          {e.option1}
        </span>
        <span className="text-right justify-end font-semibold w-[130px] text-[#F9FAFB] text-sm opacity-75 flex items-center">
          {e.option2}
          {/* {isClicked ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />} */}
        </span>
      </div>

      <p
        className={`${
          isClicked ? "block" : "hidden"
        } transition-all	duration-200	ease-in-out	 py-4  font-semibold font-Inter text-[#F9FAFB] text-sm opacity-75`}
      >
        {e.detail}
      </p>
    </div>
  );
};
function Investments() {
  return (
    <div>
      <SectionHeading text={"Investments"} />

      <div className="max-h-56 noScroll overflow-auto">
        <TableContainer>
          <div className="bg-[#121428] py-2 px-[30px] rounded-[5px] flex justify-between rounded-[3px] w-full">
            <TableHeading alignment="left" text="Protocol" />
            <TableHeading alignment="right" text="Investment" />
          </div>
          {data.map((e, i) => (
            <Details e={e} key={i} />
          ))}
        </TableContainer>
      </div>
    </div>
  );
}

export default Investments;
