import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

function Banner(props) {
  const [bannerSize, setBannerSize] = useState({ width: 0, height: 0 });
  const [isPoppersVisible, setIsPoppersVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      let banner = document.getElementById("banner");
      let size = banner?.getBoundingClientRect();
      if (size) {
        setBannerSize({
          width: size.width,
          height: size.height,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let banner = document.getElementById("banner");
    let size = banner?.getBoundingClientRect();
    if (size) {
      setBannerSize({
        width: size.width,
        height: size.height,
      });
    }

    setTimeout(() => {
      setIsPoppersVisible(false);
    }, 1000);
  }, []);
  return (
    <div id="banner">
      <div
        className="m-[15px] flex flex-1 flex-col md:flex-row md:items-center justify-between mt-[5px] h-fit relative sm:mt-[25px] rounded-[5px] border border-[#F3F4F6] text-white"
        style={{
          backgroundImage:
            "linear-gradient(93.34deg, #264DF7 0%, #8080FF 100%)",
        }}
      >
        <Confetti
          width={bannerSize.width}
          height={bannerSize.height}
          numberOfPieces={isPoppersVisible ? 500 : 0}
        />
        <div className="m-[15px] sm:my-[21px] sm:mx-[18px]">
          <h1 className="font-Space-Mono font-bold text-xl sm:text-[40px] sm:leading-[40px]">
            CONGRATULATIONS!
          </h1>
          <p className="text-sm sm:text-base mt-[5px] font-Open-Sans sm:mt-[15px] leading-[16px]">
            Your NFT #271 and #283 have won our latest giveaway
          </p>
        </div>
        <div className="m-[15px] sm:my-[21px] sm:mx-[18pxopop] ml-auto my-[21px] mr-[18px] text-right">
          <h1 className="font-Space-Mono font-bold text-xl sm:text-[40px] sm:leading-[40px]">
           { props.allWinners }
          </h1>
          <p className="text-sm sm:text-base mt-[5px] font-Open-Sans sm:mt-[15px] leading-[16px]">
            has been delivered to your wallet
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
