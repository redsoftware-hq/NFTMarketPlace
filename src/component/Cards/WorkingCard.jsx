import React from "react";

const WorkingCard = ({ item }) => {
  return (
    <>
      <div className="bg-[#3b3b3b] text-white rounded-2xl py-5">
        <div className="flex items-center md:flex-col">
          <div className="image-div w-[500px] md:w-[160px] lg:w-[250px] lg:h-[160px]">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center px-5">
            <h5 className="text-sm font-medium">{item.title}</h5>
            <p className="text-xs text-center font-light lg:px-10 py-2">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingCard;
