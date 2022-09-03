import React from "react";
import SectionHeading from "../../../../components/SectionHeading";
import TableContainer from "../../../../components/TableContainer";
import TableData from "../../../../components/TableData";
import TableHeading from "../../../../components/TableHeading";
import TableRow from "../../../../components/TableRow";

const data = [
  {
    date: "23-08-22",
    rank: "1",
    nft: "271",
    award: "120 USDC",
  },
  {
    date: "23-08-22",
    rank: "1",
    nft: "271",
    award: "120 USDC",
  },
  {
    date: "23-08-22",
    rank: "1",
    nft: "271",
    award: "120 USDC",
  },
];

function MyWinnings(props) {
  // console.log("winnings"+props.allWinners.date);
  // props.allWinners.date=props.allWinners.date.split(0,10);

  return (
    <div className="py-[10px] overflow-x-scroll noScroll">
      <SectionHeading text={"My Winnings"} />

      <div className="max-h-56 noScroll overflow-auto">
        <TableContainer>
          <div className="bg-[#121428] py-2 px-[15px] flex justify-between rounded-[3px] w-full">
            <TableHeading alignment="left" text={"Date"} />
            {/* <TableHeading alignment="center" text={"Date"} /> */}
            <TableHeading alignment="center" text={"NFT"} />
            <TableHeading alignment="right" text={"Reward"} />
          </div>
          {props.allWinners.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableData alignment={"left"} text={e.date} />
                {/* <TableData alignment={"center"} text={e.rank} /> */}
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

export default MyWinnings;
