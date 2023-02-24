import React from 'react';

const CategoryCard = ({ item }) => {
  return (
    <div className="w-full h-full hover:scale-105 duration-300 cursor-pointer">
      <div>
        <img
          className="w-[148px] h-[142px] md:w-full md:h-full  xl:w-full xl:h-full"
          src={item.image}
          alt=""
        />
      </div>
      <div className="bg-[#3b3b3b] text-white text-base font-medium w-[148px] h-[89px] md:w-full md:h-[67px]  xl:w-full px-5 py-5 rounded-b-2xl">
        {item.name}
      </div>
    </div>
  );
};

export default CategoryCard;
