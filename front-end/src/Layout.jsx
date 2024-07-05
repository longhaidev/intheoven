import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./shared/Footer/Footer";

export default function Layout() {
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
