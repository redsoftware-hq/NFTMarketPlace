import { useTimer } from "react-timer-hook";
import PrimaryButton from "../../common/Buttons/PrimaryButton";
function Timer() {
  let time = new Date();

  time.setHours(time.getHours() + 12);

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex flex-col items-center gap-2 px-2 py-4 md:p-6 max-w-fit text-white backdrop-blur-sm bg-[#3b3b3b] rounded-2xl">
      <div className="font-space-mono p-2 flex flex-col  md:mt-0 w-full">
        <p>Auction ends in:</p>
        <div className="timer-div flex gap-3 mt-6">
          <p className="flex flex-col">
            <span className="text-5xl font-extrabold">
              <span className="flex flex-col gap-5">
                {hours < 10 ? "0" + hours : hours}{" "}
                <span className="text-sm">Hours</span>
              </span>
            </span>
          </p>
          <p className="flex flex-col">
            <span className="text-5xl font-extrabold flex gap-3">
              <span>:</span>
              <span className="flex flex-col gap-5">
                {minutes < 10 ? "0" + minutes : minutes}{" "}
                <span className="text-sm">Minutes</span>
              </span>
            </span>
          </p>
          <p className="flex flex-col">
            <span className="text-5xl font-extrabold flex gap-3">
              <span>:</span>
              <span className="flex flex-col gap-5">
                {seconds < 10 ? "0" + seconds : seconds}{" "}
                <span className="text-sm">Seconds</span>
              </span>
            </span>
          </p>
        </div>
      </div>
      <PrimaryButton btnName="place bid" />
    </div>
  );
}

export default Timer;
