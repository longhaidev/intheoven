import React, { useEffect, useState } from "react";
import _ from "lodash";
// img
import bannerImg from "../../assets/Pictures/Banner3.jpg";
//
import { NavLink } from "react-router-dom";
import "./AllProduct.scss";
// fake data
import { category } from "../../assets/FakeData/FakeData";
import PageDirect from "../../components/PageDirect/PageDirect";
import products from "../../assets/FakeData/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
export default function AllProduct() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProduct();
  }, []);
  const getAllProduct = () => {
    const productArray = [];
    products.map((product) => {
      productArray.push(product);
    });
    setAllProduct(productArray);
  };
  return (
    <>
      <div>
        {/* Page direction */}
        <PageDirect pageName="Our Menu" bgImg={bannerImg}></PageDirect>
        <div className="p-[15px] lg:max-w-[1200px] lg:w-[1200px] lg:mr-auto lg:ml-auto  ">
          {category &&
            category.length > 0 &&
            category.map((category) => {
              return (
                <div key={category.id}>
                  <h3 className="capitalize text-[24px] font-semibold">
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
          <h3 className="text-[24px] font-semibold">All Products</h3>
          {allProduct.map((item) => {
            return (
              <div className="w-full flex flex-col items-center">
                {item.products.map((product) => {
                  return (
                    <div key={product.id}>
                      <ProductCard
                        category={item.category}
                        productItem={product}
                      ></ProductCard>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
