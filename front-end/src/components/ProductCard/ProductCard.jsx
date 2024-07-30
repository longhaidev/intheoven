import React from "react";
import { FaBookmark } from "react-icons/fa6";
import BuyNowButton from "../Button/BuyNowButton";
import AddToCartButton from "../Button/AddToCartButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function ProductCard(props) {
  const { category, productItem } = props;
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.cart);
  return (
    <div
      className={`w-[90%] h-full m-[12px] p-[6px] border border-gray-300 rounded-md shadow-sm hover:scale-[1.03] transition ease-in-out hover:!border-gray-400 ${
        productItem.stock <= 0 ? "grayscale pointer-events-none" : ""
      } `}
    >
      <div className="product-hover flex flex-col relative">
        {/* productt img */}
        <div
          className=" w-full h-full relative p-[6px] flex flex-col items-center"
          onClick={() => navigate(`/menus/${category}/${productItem.id}`)}
        >
          <div className=" w-full h-[full] relative">
            <img
              draggable={false}
              className=" rounded-md w-full h-full object-cover"
              src={productItem.img}
            ></img>
            {productItem.stock <= 0 && (
              <div className="absolute z-[1] w-full h-full top-0 bg-black opacity-80 rounded-md text-center flex flex-col justify-center text-[16px] text-white uppercase font-semibold">
                <p>Sold out</p>
              </div>
            )}
          </div>
          {cartItem.find((item) => item.id === productItem.id) && (
            <span className="absolute right-0 top-[6px] flex flex-col items-center justify-center">
              <FaBookmark color="red" size={40} className="relative" />
              <p className="absolute top-[10px] m-0 text-white text-[11px] italic">
                Added
              </p>
            </span>
          )}
        </div>
        {/* product info */}
        <div className="p-[6px] w-full h-full flex flex-col items-start">
          <span className="flex flex-col gap-[6px] w-full">
            <p className="m-0 text-[20px] font-[600] w-full">
              {productItem.name}
            </p>
            <p className="m-0 text-[18px] w-full text-gray-500 capitalize">
              {category && `#${category}`}
            </p>
            <p className="m-0 text-[22px] text-red-700 w-full">
              {(productItem.price * 1000).toLocaleString()}₫
            </p>
            <span className="flex flex-row gap-2 w-full items-center">
              <div className="w-[70%]">
                <BuyNowButton
                  product={productItem}
                  productQuantity={1}
                ></BuyNowButton>
              </div>
              <AddToCartButton
                product={productItem}
                productQuantity={1}
              ></AddToCartButton>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
