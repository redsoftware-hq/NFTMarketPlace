import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="mt-5 my-2 sm:my-4 md:my-6 cursor-pointer bg-[#3b3b3b] rounded-2xl"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1 text-white text-base">{title}</h5>
        <div className="flex-none pl-2">
          {expanded ? (
            <MdKeyboardArrowUp
              size={25}
              className="text-white rotate-0 transition-all duration-500 ease-in-out"
            />
          ) : (
            <MdKeyboardArrowUp
              size={25}
              className="text-white rotate-180 transition-all duration-500 ease-in-out"
            />
          )}
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-48" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left text-[#858584] text-sm">{content}</p>
      </div>
    </div>
  );
}

export default Accordion;
