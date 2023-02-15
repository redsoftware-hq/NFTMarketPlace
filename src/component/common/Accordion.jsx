import AccordionLayout from "./AccordionLayout";
import { useState } from "react";
const tags = [];
function Accordion() {
  const [isOpen, setisOpen] = useState(false);
  const handleToggle = () => setisOpen(!isOpen);

  return (
    <div className="py-2 flex flex-col items-center justify-between">
      <AccordionLayout
        title="Properties"
        isOpen={isOpen}
        handleToggle={handleToggle}
      >
        <p className="text-[#858584] font-space-mono font-light text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionLayout>
    </div>
  );
}

export default Accordion;
