import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserMenu from "components/UserMenu/UserMenu";
import { useParams } from "react-router-dom";
export default function UserLayout() {
  return (
    <div className="bg-[#9e513b0d] p-[14px] pb-[2.5rem] relative">
      <div className="w-full flex flex-row justify-end mb-[10px] sticky top-[58px] z-[1] backdrop-blur-[5px] lg:top-[65px]">
        <UserMenu></UserMenu>
      </div>
      <div className="w-full flex flex-col items-center justify-center ">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
