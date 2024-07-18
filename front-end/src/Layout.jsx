import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./shared/Footer/Footer";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <div className="pt-[58px]">
        <Outlet></Outlet>
      </div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        stacked
      ></ToastContainer>
    </>
  );
}
