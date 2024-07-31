import React from "react";
import { NavLink } from "react-router-dom";
// styles
import "./Related.scss";
// components

import ProductCard from "../ProductCard/ProductCard";
export default function Related(props) {
  const { relatedProduct } = props;
  return (
    <div className=" mt-[20px] md:mb-[0px]">
      {relatedProduct && (
        <div>
          <h3 className="text-center text-[22px] font-semibold md:mb-4">
            Related Food
          </h3>
          <div className="p-[14px]">
            <div className="mx-2">
              <div className="flex flex-col w-full items-center md:flex-row md:flex-wrap">
                {relatedProduct.length > 0 &&
                  relatedProduct.map((item) => {
                    return (
                      <ProductCard
                        key={item.id}
                        productItem={item}
                      ></ProductCard>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
