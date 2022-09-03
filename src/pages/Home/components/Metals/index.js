import React, { useEffect, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import img from "../../../../assets/platinum.png";
import img1 from "../../../../assets/copper.png";

import img2 from "../../../../assets/gold.png";

import img3 from "../../../../assets/silver.png";

import leftarrow from "../../../../assets/left-arrow.png";
import rightarrow from "../../../../assets/right-arrow.png";
import SectionHeading from "../../../../components/SectionHeading";
import SliderTile from "../../../../components/SliderTile";

function Metals(props) {

  // useEffect(()=>{
   
  // },[props.ipfs])

  console.log(props.NFTaddress+"lbnkjebiub");
  const ref = useRef();

  function scrollLeft(e) {
    ref.current.scrollTo({
      left: ref.current?.scrollLeft - 320,
      behavior: "smooth",
    });
  }

  function scrollRight(e) {
    ref.current.scrollTo({
      left: ref.current?.scrollLeft + 320,
      behavior: "smooth",
    });
  }

  return (
    <div className="py-[10px]">
      <div className="flex items-center justify-between w-full">
        <SectionHeading text={"My NodeMine Metals"} />
        <div className="flex items-center justify-center">
          <button
            className="w-[30px] h-[30px] bg-[#111730] cursor-pointer flex items-center justify-center hover:bg-[#152981]"
            onClick={scrollLeft}
          >
            <img src={leftarrow} alt="leftarrow" />
          </button>
          <button
            className="w-[30px] h-[30px] bg-[#111730] cursor-pointer flex items-center justify-center hover:bg-[#152981]"
            onClick={scrollRight}
          >
            <img src={rightarrow} alt="rightarrow" />
          </button>
        </div>
      </div>
      <div className="my-0 flex items-center overflow-x-scroll noScroll cursor-grab">
        <ScrollContainer
          innerRef={ref}
          style={{ display: "flex" }}
          horizontal={true}
        >
          {props.ipfs?.map((e,i)=>{
        console.log("hellgggo" +e);
        if(e.image=="ipfs://QmWMoT9gxCL393gquN4spG2Wxhp19xiLEz5ZZ6StetLcvJ"){

          return(
     
          <SliderTile img={img3} text={e.name} />
   

)

        }
        else if(e.image=="ipfs://QmSqCURF5d2idiq8QawRFwrvnbNwbSG89wx4p5Uc6GkomT")
        {
          return(
      
          <SliderTile img={img1} text={e.name} />

)
        }
        else if(e.image=="ipfs://QmeqtnwN1deJgqgV7Z8tjzDR8E6wWss9T7tdc9kQPSJ9GH")
        {
          return(
        
          <SliderTile img={img2} text={e.name} />


)
        }
        else if(e.image=="ipfs://QmWoW54V4VCBJ8BsgxRi9VdXPqEjeVL6au7JdUnnqnYNdZ")
        {
          return(
       
          <SliderTile img={img} text={e.name} />

      
 
)
        }




    })}
   
        </ScrollContainer>
      </div>
      
    </div>
  );
}

export default Metals;
