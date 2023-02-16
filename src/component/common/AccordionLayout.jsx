import { FiArrowDown } from "react-icons/fi";
import { useState } from "react";
export default function AccordionLayout({ title, children }) {
  const [isOpen, setisOpen] = useState(false);
  const handleToggle = () => setisOpen(!isOpen);
  return (
    <>
      <div
        className="flex flex-row w-full item-center gap-4 justify-between py-2"
        onClick={handleToggle}
      >
        <div className="text-white text-lg">{title}</div>
        {!isOpen ? (
          <div className="text-white">
            <FiArrowDown className="w-6 h-6 transform shrink-0 rotate-270 duration-300" />
          </div>
        ) : (
          <div className="text-white">
            <FiArrowDown className="w-6 h-6 transform rotate-180 duration-300" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="w-11/12 md:w-[98%] px-4 py-2 bg-[#3b3b3b] rounded-2xl">
          {children}
        </div>
      )}
    </>
  );
}
