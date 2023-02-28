import React from 'react';

const DropdownMenu = () => {
  return (
    <div className="w-28 flex flex-col absolute top-12 right-6 bg-[#3b3b3b] rounded-md">
      <ul className="flex flex-col gap-2 text-white text-base">
        <li className="hover:bg-[#575757] rounded-t-md duration-300 py-2 px-2">
          <span className="">List</span>
        </li>
        <li className="hover:bg-[#575757] duration-300 py-2 px-2">
          <span className="">Burn</span>
        </li>
        <li className="hover:bg-[#575757] rounded-b-md duration-300 py-2 px-2">
          <span className="">De-list</span>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
