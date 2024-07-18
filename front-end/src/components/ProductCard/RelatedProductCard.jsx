import React from "react";
// components
import AddToCartButton from "../Button/AddToCartButton";
// redux
import { useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa";
export default function RelatedProductCard(props) {
  const { productDetail } = props;

  const cartItem = useSelector((state) => state.cart.cart);
  const isAdded = cartItem.some((item) => item.id === productDetail.id);

  return (
    <div draggable={false} className="w-[45%] product-hover">
      <div className="w-full h-[220px] ml-auto mr-auto flex flex-col justify-between items-center select-none capitalize text-[14px] relative ">
        <img
          className="w-full h-full object-cover rounded-md "
          src={productDetail.img}
          draggable={false}
        ></img>
        {isAdded && (
          <span className="absolute right-0 top-0 flex flex-col items-center justify-center">
            <FaBookmark color="red" size={40} className="relative" />
            <p className="absolute top-[10px] m-0 text-white text-[11px] italic">
              Added
            </p>
          </span>
        )}
        <div className="absolute w-full flex flex-col h-[70%] items-center justify-end gap-[5px] pl-[15px] pr-[15px] product-active">
          <AddToCartButton
            product={productDetail}
            productQuantity={1}
            fontSize="6px"
            bgColor="white"
          ></AddToCartButton>
        </div>
        <span className="flex flex-col items-center mt-[10px]">
          <p className="m-0 font-semibold">{productDetail.name}</p>
          <p className="m-0">
            {(productDetail.price * 1000).toLocaleString()}₫
          </p>
        </span>
      </div>
    </div>
  );
}
