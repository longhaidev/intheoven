import React from "react";
import { NavLink } from "react-router-dom";
// styles
import "./Related.scss";
// components
import RelatedProductCard from "../ProductCard/RelatedProductCard";
export default function Related(props) {
  const { relatedProduct } = props;
  return (
    <div className=" mb-[20px]">
      <div>
        <h3 className="text-center">Related Food</h3>
        <div className="flex flex-row flex-wrap gap-y-[50px] mt-[15px] justify-between pl-[5%] pr-[5%]">
          {relatedProduct &&
            relatedProduct.length > 0 &&
            relatedProduct.map((item) => {
              return (
                <RelatedProductCard
                  key={item.id}
                  productDetail={item}
                ></RelatedProductCard>
              );
            })}
        </div>
      </div>
    </div>
  );
}
