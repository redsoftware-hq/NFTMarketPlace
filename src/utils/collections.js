import Puppy from "../assets/collections/puppy.png";
import Mouse from "../assets/collections/mouse.png";
import Bear from "../assets/collections/bear.png";
import Mushroom_1 from "../assets/collections/card2-mushroom1.png";
import Mushroom_2 from "../assets/collections/card2-mushroom2.png";
import Mushroom_3 from "../assets/collections/card2-mushroom3.png";
import Robot_1 from "../assets/collections/card3-robot1.png";
import Robot_2 from "../assets/collections/card3-robot2.png";
import Robot_3 from "../assets/collections/card3-robot3.png";

export let Collection = [
  {
    id: 1,
    url: Puppy,
    thumbnailOne: Mouse,
    thumbnailTwo: Bear,
  },

  {
    id: 2,
    url: Mushroom_1,
    thumbnailOne: Mushroom_2,
    thumbnailTwo: Mushroom_3,
  },

  {
    id: 3,
    url: Robot_1,
    thumbnailOne: Robot_2,
    thumbnailTwo: Robot_3,
  },
];

{
  /* <div className="card-1 grid grid-flow-row max-w-[320px] max-h-[525px] gap-2">
                <div className="grid min-w-80">
                  <img className="w-full" src={Puppy} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <img className="w-full" src={Mouse} alt="" />
                  </div>
                  <div>
                    <img className="w-full" src={Bear} alt="" />
                  </div>
                  <div className="w-full bg-[#A259FF] text-white rounded-2xl flex items-center justify-center font-space-mono font-bold text-lg">
                    1025+
                  </div>
                </div>
              </div>

              <div className="card-2 hidden md:grid grid-flow-row max-w-[320px] max-h-[525px] gap-2">
                <div className="grid min-w-80">
                  <img className="w-full" src={Mushroom_1} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <img className="w-full" src={Mushroom_2} alt="" />
                  </div>
                  <div>
                    <img className="w-full" src={Mushroom_3} alt="" />
                  </div>
                  <div className="w-full bg-[#A259FF] text-white rounded-2xl flex items-center justify-center font-space-mono font-bold text-lg">
                    1025+
                  </div>
                </div>
              </div>

              <div className="card-3 hidden lg:grid grid-flow-row max-w-[320px] max-h-[525px] gap-2">
                <div className="grid min-w-80">
                  <img className="w-full" src={Robot_1} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <img className="w-full" src={Robot_2} alt="" />
                  </div>
                  <div>
                    <img className="w-full" src={Robot_3} alt="" />
                  </div>
                  <div className="w-full bg-[#A259FF] text-white rounded-2xl flex items-center justify-center font-space-mono font-bold text-lg">
                    1025+
                  </div>
                </div>
              </div> */
}
