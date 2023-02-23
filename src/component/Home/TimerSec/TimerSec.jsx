import { useTimer } from 'react-timer-hook';
import Bg from '../../../assets/timersec/bg.png';
import Shroomie from '../../../assets/timersec/s.png';
import PurpleEye from '../../../assets/timersec/eye.png';
import { useNavigate } from 'react-router-dom';

const TimerSec = () => {
  const item = {
    id: 'higlighted-nft',
    image: Bg,
    imgTitle: 'Magic Mushrooms',
    avatar: Shroomie,
    avatarName: 'Shroomie',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
    fiatPrice: '4.95',
    isAvailabe: true
  };
  let time = new Date();
  time.setHours(time.getHours() + 12);

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn('onExpire called')
  });

  const navigate = useNavigate();
  const handleClick = () => navigate(`/details/${item.id}`);

  return (
    <>
      <section
        className="w-full h-[660px] bg-no-repeat bg-center bg-cover mt-12 z-0 relative"
        style={{
          backgroundImage: `url(${Bg})`
        }}
      >
        <div
          className="w-full h-full absolute"
          style={{
            background: 'linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #F15623 100%)'
          }}
        >
          <div className="container mx-auto">
            <div className="py-12 px-8 md:px-12 lg:px-20">
              <div className="container-div mt-24 md:mt-[20rem]">
                <div className="container-1">
                  <div className="w-[151px] flex text-white items-center bg-[#3B3B3B] rounded-2xl px-5 py-2 gap-2">
                    <div className="img-div">
                      <img className="w-8" src={Shroomie} alt="" />
                    </div>
                    <p className="text-sm">Shroomie</p>
                  </div>
                </div>
                <div className="container-2 grid grid-cols-1 md:grid-cols-2 text-white mt-10 gap-5">
                  <div className="space-y-10 w-full">
                    <h2 className="text-white text-5xl md:text-4xl lg:text-5xl capitalize font-bold">
                      magic mushrooms
                    </h2>
                    <button
                      onClick={handleClick}
                      className="py-5 px-16 hidden md:flex items-center bg-[#ffff] hover:bg-[#3b3b3b] border-2 border-[#F15623] hover:text-white ease-in-out duration-300 rounded-2xl capitalize text-black text-lg font-semibold gap-3"
                    >
                      <img className="w-4 md:w-6" src={PurpleEye} alt="" /> See NFT
                    </button>
                  </div>
                  <div className="font-space-mono backdrop-blur-sm bg-black/30 rounded-2xl py-4 px-2 flex flex-col items-center mt-5 md:mt-0 w-full">
                    <p>Auction ends in:</p>
                    <div className="timer-div flex gap-3 mt-6">
                      <p className="flex flex-col">
                        <span className="text-5xl font-extrabold">
                          <span className="flex flex-col gap-5">
                            {hours < 10 ? '0' + hours : hours}{' '}
                            <span className="text-sm">Hours</span>
                          </span>
                        </span>
                      </p>
                      <p className="flex flex-col">
                        <span className="text-5xl font-extrabold flex gap-3">
                          <span>:</span>
                          <span className="flex flex-col gap-5">
                            {minutes < 10 ? '0' + minutes : minutes}{' '}
                            <span className="text-sm">Minutes</span>
                          </span>
                        </span>
                      </p>
                      <p className="flex flex-col">
                        <span className="text-5xl font-extrabold flex gap-3">
                          <span>:</span>
                          <span className="flex flex-col gap-5">
                            {seconds < 10 ? '0' + seconds : seconds}{' '}
                            <span className="text-sm">Seconds</span>
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleClick}
                    className="py-5 px-24 md:hidden flex items-center mx-auto w-full bg-[#ffff] hover:bg-transparent border-2 border-[#A259FF] hover:text-white ease-in-out duration-300 rounded-2xl capitalize text-black text-lg font-semibold gap-3 mt-5"
                  >
                    <img className="w-5" src={PurpleEye} alt="" /> See NFT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimerSec;
