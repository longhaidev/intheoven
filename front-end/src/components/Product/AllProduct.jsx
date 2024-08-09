import React from "react";
import products from "assets/FakeData/products.json";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
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
    <div className="mt-8 mb-8 flex flex-col items-center  z-[0] lg:mt-12">
      <div id="all_product_wrapper" className="w-[81%] md:w-[93%] mt-6">
        <h2 className="mx-1 mb-5 text-center capitalize font-section-heading font-semibold">
          All Product
        </h2>
        <div className="w-full">
          {allProduct.map((item, index) => {
            return (
              <div key={index} className="mb-11">
                <span className="flex flex-row justify-center items-center w-[100%] mt-6 md:mt-11">
                  <p className="border-1 !border-[#ff6d00] w-[100px] md:w-[250px] mb-[4px]"></p>
                  <h2 className="text-color-hover mx-1 mb-2 text-center capitalize font-big-heading font-semibold">
                    Wake up your taste
                  </h2>
                  <p className="border-1 !border-[#ff6d00] w-[100px] md:w-[250px] mb-[4px]"></p>
                </span>
                <h2 className="text-color-hover uppercase mx-1 mb-2 text-center  font-section-heading font-semibold">
                  {item.category}
                </h2>
                <div className="flex flex-col items-center justify-center gap-[45px] mt-6 ">
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[45px] w-full lg:w-full lg:gap-7 ">
                    {item.products.map((product) => {
                      return (
                        <ProductCard
                          category={item.category}
                          productItem={product}
                        ></ProductCard>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
