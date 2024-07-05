import React, { useEffect } from "react";
import _ from "lodash";
// cpn
import Header from "../../components/Header/Header";
import Footer from "../../shared/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
// img
import bannerImg from "../../assets/Pictures/Banner3.jpg";
//
import { NavLink } from "react-router-dom";
import "./AllProduct.scss";
// fake data
import { category } from "../../assets/FakeData/FakeData";
export default function AllProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        {/* Page direction */}
        <div className="relative bg-black">
          <div className="opacity-40">
            <img src={bannerImg}></img>
          </div>
          <div className="absolute top-[30%] left-[25.5%] flex flex-col items-center">
            <span className=" text-white text-2xl flex flex-row gap-2 ">
              <NavLink to="/" className="text-white text-2xl no-underline mb-2">
                Home
              </NavLink>
              &gt;
              <NavLink
                to="/menus/all"
                className="text-white text-2xl no-underline"
              >
                Menu
              </NavLink>
            </span>
            <h3 className="text-white text-5xl ">Our Menu</h3>
          </div>
        </div>
        <div className="p-[15px]">
          {category &&
            category.length > 0 &&
            category.map((category) => {
              return (
                <div key={category.id}>
                  <h3 className="capitalize text-3xl">
                    {category.category_name}
                  </h3>
                  <div className="flex flex-col items-center gap-4 mb-3">
                    {category.items &&
                      category.items.length > 0 &&
                      category.items.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="flex flex-col items-center gap-[5px] mt-[15px] category-item w-fit mb-[40px]"
                          >
                            <NavLink
                              to={item.item_link}
                              className="no-underline text-center text-black capitalize text-2xl"
                            >
                              <div className="w-[350px] h-[240px]">
                                <img
                                  className="object-cover rounded-[20px] h-full w-full "
                                  src={item.item_img}
                                ></img>
                              </div>
                              <div>
                                <span>{item.item_name}</span>
                              </div>
                            </NavLink>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
