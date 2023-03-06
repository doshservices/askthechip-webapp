import { useState } from "react";
import light from "../../assets/& Switch-white.svg";
import dark from "../../assets/& Switch-dark.svg";

export const Header = () => {
  const [src, setSrc] = useState(light);

  return (
    <div className="flex justify-between p-5">
      <h3 className="text-[#0F1419] font-bold font-Inter text-[1.1875rem]">Home</h3>
      <div onClick={() => setSrc(!src)} className="flex gap-2 cursor-pointer">
        <span>Switch board</span>
        <img src={src ? light : dark} alt="switch" className="w-8" />
      </div>
    </div>
  );
};
