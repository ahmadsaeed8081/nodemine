import {React,useState,useEffect} from "react";
import SectionHeading from "../../../../components/SectionHeading";
import SubContainer from "../../../../components/SubContainer";

function Giveaway() {

  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Aug 05,2022 17:00:00 UTC").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
        // turnOnMinting();
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <div className="pb-[10px]">
      <SectionHeading text={"Next Giveaway"} />
      <SubContainer>
        <h2
          className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#264DF7] to-[#8080FF] text-5xl	font-normal font-Inter	"
        >
          {timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}
        </h2>
        <p className="text-white font-Open-Sans mt-[15px] text-base	leading-4">Friday, August 5th at 5:00 UTC</p>
      </SubContainer>
    </div>
  );
}

export default Giveaway;

