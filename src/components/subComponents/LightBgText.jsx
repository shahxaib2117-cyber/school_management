import React from "react";
const LightBgText = ({ lable = "Development", className = "",disabled, onClick }) => {
  return (
    <button
      onClick={()=>onClick()} disabled={disabled}
      className={` text-center px-2 py-1 text-[#d4a50a] bg-[#fdedb8] cursor-pointer rounded-3xl ${className}`} >
      {lable}
    </button>
  );
};

export default LightBgText;