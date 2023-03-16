import React from 'react';

function Header({ image }) {
  return (
    <div className="md:h-fit">
      <img className="w-full h-80 object-cover" src={image} />
    </div>
  );
}

export default Header;
