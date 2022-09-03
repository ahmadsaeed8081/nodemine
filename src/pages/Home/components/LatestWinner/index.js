import React from "react";
import SectionHeading from "../../../../components/SectionHeading";
import TableContainer from "../../../../components/TableContainer";
import TableData from "../../../../components/TableData";
import TableHeading from "../../../../components/TableHeading";
import TableRow from "../../../../components/TableRow";

let data = [
  {
    nft: "271",
    award: "2 days yield",
  },
  {
    nft: "271",
    award: "2 AVAX",
  },
  {
    nft: "271",
    award: "2 AVAX",
  },
  {
    nft: "271",
    award: "2 AVAX",
  },
  {
    nft: "271",
    award: "2 AVAX",
  },
  {
    nft: "271",
    award: "2 AVAX",
  },
  {
    nft: "271",
    award: "2 AVAX",
  },
];

function LatestWinner(props) {
  return (
    <div className="py-[10px]">
      <SectionHeading text={"Latest Winners"} />
      <div className="max-h-56 noScroll overflow-auto">
        <TableContainer>
          <div className="bg-[#121428] py-2 px-[15px]  flex justify-between rounded-[3px] w-full">
            <TableHeading alignment="left" text={"Giveaway"} />
            <TableHeading alignment="center" text={"NFT"} />
            <TableHeading alignment="right" text={"Reward"} />
          </div>
          {props.allWinners.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableData alignment={"left"} text={e.Giveaway} />
                <TableData alignment={"center"} text={e.NFT} />
                <TableData alignment={"right"} text={e.award} />
              </TableRow>
            );
          })}
        </TableContainer>
      </div>
    </div>
  );
}

export default LatestWinner;
