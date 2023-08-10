import React from "react";
import { FaBeer } from "react-icons/fa";
function Button(props:any) {
  return (
    <div>
      <button
        type="button"
        className="text-black button bg-[#FCA2D5]  font-medium  text-sm px-16 py-7 mr-2 mb-2 rounded-[50px] shadow-[6px_8px_0px_1px_rgba(0,0,0,1)] flex gap-4"
      >
        {props.title} <span>{props.icon && props.icon}</span>
      </button>
    </div>
  );
}

export default Button;
