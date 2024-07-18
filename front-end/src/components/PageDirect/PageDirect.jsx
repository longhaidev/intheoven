import React from "react";
import { NavLink } from "react-router-dom";
import backgroundImg from "../../assets/Pictures/backgroundimg2.jpg";
export default function PageDirect(props) {
  const { pageName, direction, bgImg } = props;
  return (
    <div className=" bg-black">
      <div className="opacity-40 h-[150px]">
        <img
          draggable={false}
          className="h-full w-full object-cover select-none"
          src={bgImg ? bgImg : backgroundImg}
        ></img>
      </div>
      <div className="flex flex-col absolute w-full top-0 h-[40%] justify-center">
        <div className="flex flex-col items-center">
          <span className=" text-white text-2xl flex flex-row gap-2 ">
            <NavLink
              draggable={false}
              to="/"
              className="text-white text-2xl no-underline capitalize mb-2"
            >
              Home
            </NavLink>
            &gt;
            <NavLink
              draggable={false}
              to={direction}
              className="text-white text-2xl no-underline capitalize"
            >
              {pageName}
            </NavLink>
          </span>
          <h3 className="text-white text-3xl capitalize" draggable={false}>
            {pageName}
          </h3>
        </div>
      </div>
    </div>
  );
}
