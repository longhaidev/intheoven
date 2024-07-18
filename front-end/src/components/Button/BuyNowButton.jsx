import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
// redux
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
export default function BuyNowButton(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { bgColor, fontSize, product } = props;
  const handleBuyNow = () => {
    console.log(product);
    if (product) {
      product.quantity = 1;
      dispatch(addToCart(product));
      navigate("/cart");
    }
  };
  return (
    <div
      className="p-2 w-full flex justify-center cursor-pointer z-[1] hover:scale-[1.045] transition-all"
      style={{ backgroundColor: `${bgColor ?? "rgb(241, 218, 178)"}` }}
      onClick={() => {
        handleBuyNow();
      }}
    >
      <div>
        <p className={`relative m-0 !text-[${fontSize ?? "18px"}]`}>Buy Now</p>
      </div>
    </div>
  );
}
