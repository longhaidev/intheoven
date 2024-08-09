import React, { useEffect, useState } from "react";
import _ from "lodash";
import { NavLink } from "react-router-dom";
// img
import bannerImg from "assets/Pictures/Banner3.jpg";
//
import "./Menu.scss";
// fake data
import { category } from "assets/FakeData/FakeData";
// component
import PageDirect from "components/PageDirect/PageDirect";
import AllProduct from "components/Product/AllProduct";
export default function Menu() {
  return (
    <>
      <div>
        {/* Page direction */}
        <PageDirect pageName="Our Menu" bgImg={bannerImg}></PageDirect>
        <div className="mt-8 mb-8 flex flex-col items-center  z-[0] lg:mt-12">
          {category &&
            category.length > 0 &&
            category.map((category) => {
              return (
                <div key={category.id} className="w-[81%] md:w-[93%] mb-4">
                  <h2 className="mx-1 mb-2 text-left capitalize font-big-heading font-semibold">
                    {category.category_name}
                  </h2>
                  <div className="flex flex-col items-center lg:mt-6">
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-11 w-full md:gap-x-[1rem] lg:gap-x-[8px]">
                      {category.items &&
                        category.items.length > 0 &&
                        category.items.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="w-full flex flex-col items-center gap-[5px] mt-[15px] category-item lg:items-baseline"
                            >
                              <NavLink
                                to={item.item_link}
                                className="no-underline text-center text-black capitalize text-xl"
                              >
                                <div className="w-[300px] h-[200px] mb-2 md:w-[270px]">
                                  <img
                                    className="object-cover rounded-md h-full w-full "
                                    src={item.item_img}
                                  ></img>
                                </div>
                                <div>
                                  <span className="font-text-primary">
                                    {item.item_name}
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          {/* All Product */}
          <div className="w-full">
            <AllProduct></AllProduct>
          </div>
        </div>
      </div>
    </>
  );
}
