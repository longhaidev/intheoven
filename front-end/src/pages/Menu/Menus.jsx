import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

export default function Menus() {
  return (
    <>
      <Header></Header>
      <div className="pt-[75px]">
        <Outlet></Outlet>
      </div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
}
