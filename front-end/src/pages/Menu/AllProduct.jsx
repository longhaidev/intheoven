import React, { useEffect } from "react";
import _ from "lodash";
// img
import bannerImg from "../../assets/Pictures/Banner3.jpg";
//
import { NavLink } from "react-router-dom";
import "./AllProduct.scss";
// fake data
import { category } from "../../assets/FakeData/FakeData";
import PageDirect from "../../components/PageDirect/PageDirect";
export default function AllProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        {/* Page direction */}
        <PageDirect pageName="Our Menu" bgImg={bannerImg}></PageDirect>
        {/* <div className="relative bg-black">
          <div className="opacity-40 w-full h-[150px]">
            <img className="object-cover w-full h-full" src={bannerImg}></img>
          </div>
          <div className="absolute flex flex-col items-center top-0 h-full w-full justify-center">
            <span className=" text-white text-[26px] flex flex-row gap-2 ">
              <NavLink
                to="/"
                className="text-white text-[26px] no-underline mb-2"
              >
                Home
              </NavLink>
              &gt;
              <NavLink
                to="/menus/all"
                className="text-white text-[26px] no-underline"
              >
                Menu
              </NavLink>
            </span>
            <h3 className="text-white text-[28px] ">Our Menu</h3>
          </div>
        </div> */}

        <div className="p-[15px] lg:max-w-[1200px] lg:w-[1200px] lg:mr-auto lg:ml-auto  ">
          {category &&
            category.length > 0 &&
            category.map((category) => {
              return (
                <div key={category.id}>
                  <h3 className="capitalize text-[20px] font-semibold md:text-[28px] md:mb-[20px]">
                    {category.category_name}
                  </h3>
                  <div className="flex flex-col items-center gap-4 mb-3 md:flex-row md:items-center md:gap-1 md:flex-wrap md:justify-around md:w-[90%] md:ml-auto md:mr-auto">
                    {category.items &&
                      category.items.length > 0 &&
                      category.items.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="flex flex-col items-center gap-[5px] mt-[15px] category-item w-fit"
                          >
                            <NavLink
                              to={item.item_link}
                              className="no-underline text-center text-black capitalize text-xl"
                            >
                              <div className="w-[300px] h-[200px] mb-2">
                                <img
                                  className="object-cover rounded-[20px] h-full w-full "
                                  src={item.item_img}
                                ></img>
                              </div>
                              <div>
                                <span className="text-[18px]">
                                  {item.item_name}
                                </span>
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
