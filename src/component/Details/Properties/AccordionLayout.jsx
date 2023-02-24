import { useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';

export default function AccordionLayout({ title, children }) {
  const [isOpen, setisOpen] = useState(false);
  const handleToggle = () => setisOpen(!isOpen);
  return (
    <>
      <div
        className="flex flex-1 w-full item-center gap-4 justify-between my-2"
        onClick={handleToggle}
      >
        <div className="text-white text-lg">{title}</div>
        <div className="text-white cursor-pointer">
          <FiArrowDown
            className={`w-6 h-6 transform duration-300 ${
              !isOpen ? 'shrink-0 rotate-270' : 'rotate-180'
            }`}
          />
        </div>
      </div>
      {isOpen && <div className="w-full px-4 py-2 bg-[#3b3b3b] rounded-2xl">{children}</div>}
    </>
  );
}
