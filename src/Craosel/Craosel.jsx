import React from "react";
import { FaStarOfDavid } from "react-icons/fa6";
import "../Craosel/Carosel.css";
import Marquee from "react-fast-marquee";

const Craosel = () => {
  return (
    <div className="main p-[30px] mt-[-50px] sm-max:mt-[-40px] sm-max:p-[10px] ">
      <Marquee>
        <div className="flex items-center gap-[50px] justify-center sm-max:gap-[30px]">
          <h1 className="react-heading text-[65px] font-[600] font-playfair text-transparent -webkit-text-stroke-[0.5px] text-white">React Js</h1>
          <div className="text-[white]">
            <FaStarOfDavid className="h-[30px] w-[30px]" />
          </div>
          <h1 className="text-[white] text-[65px] font-[600] font-sans">Java Script</h1>
          <div className="text-[white]">
            <FaStarOfDavid className="h-[30px] w-[30px]" />
          </div>
          <h1  className="redux text-[white] text-[65px] font-[600] font-oswald ">Redux Toolkit</h1>
          <div className="text-[white]">
            <FaStarOfDavid className="h-[30px] w-[30px]" />
          </div>
          <h1 className="text-[white] text-[65px] font-[600]">Tailwind css</h1>
          <div className="text-[white]">
            <FaStarOfDavid className="h-[30px] w-[30px]" />
          </div>
          <h1 className="hyper text-[white] text-[65px] font-[600]">HTML</h1>
          <div className="text-[white]">
            <FaStarOfDavid className="h-[30px] w-[30px]" />
          </div>
          <h1 className="text-[white] text-[65px] font-[600]">CSS</h1>
          <div className="text-[white]">
            <FaStarOfDavid className="h-[30px] w-[30px]" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Craosel;
