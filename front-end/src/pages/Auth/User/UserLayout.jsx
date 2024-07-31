import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserMenu from "components/UserMenu/UserMenu";
import { useParams } from "react-router-dom";
export default function UserLayout() {
  return (
    <div className="bg-[#9e513b0d] p-[14px] pb-[2.5rem] relative">
      <div className="w-full flex flex-row justify-end mb-[10px] sticky top-[58px] z-[1] backdrop-blur-[5px]">
        <UserMenu></UserMenu>
      </div>
      <div className="w-[full] bg-white shadow-md rounded-xl p-[14px] pt-[1.5rem] pb-[1.5rem] md:mx-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
