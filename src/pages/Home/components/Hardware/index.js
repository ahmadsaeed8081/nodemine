import React from "react";
import SectionHeading from "../../../../components/SectionHeading";
import TableContainer from "../../../../components/TableContainer";
import TableData from "../../../../components/TableData";
import TableHeading from "../../../../components/TableHeading";
import TableRow from "../../../../components/TableRow";

const data = [
  {
    days: "75 days",
    model: "Kadena ASIC",
    value: "$6,000",
  },
  {
    days: "98 days",
    model: "GPU Rig",
    value: "$15,000",
  },
];

function Hardware() {
  return (
    <div className="py-[10px]">
      <SectionHeading text={"Hardware"} />

      <div className="max-h-56 noScroll overflow-auto">
        <TableContainer>
          <div className="bg-[#121428] py-2 px-[15px] flex justify-between rounded-[3px] w-full">
            <TableHeading alignment="left" text="Days in Service" />
            <TableHeading alignment="center" text="Model" />
            <TableHeading alignment="right" text="Approx. Value" />
          </div>
          {data.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableData alignment={"left"} text={e.days} />
                <TableData alignment={"center"} text={e.model} />
                <TableData alignment={"right"} text={e.value} />
              </TableRow>
            );
          })}
        </TableContainer>
      </div>
    </div>
  );
}

export default Hardware;
