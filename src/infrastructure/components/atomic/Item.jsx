import React from "react";

const Item = ({ icon, text }) => {
  return (
    <div className="item flex text-ellipsis">
      {icon}
      <p className="pl-2">{text}</p>
    </div>
  );
};

export default Item;
