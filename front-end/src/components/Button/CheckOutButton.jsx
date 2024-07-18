import React from "react";
import { useNavigate } from "react-router-dom";
export default function CheckOutButton(props) {
  const { style, bgColor } = props;
  const navigate = useNavigate();
  const handleCheckOut = () => {
    console.log("checkout");
    navigate("/checkout");
  };
  return (
    <div
      className={style}
      style={{ backgroundColor: bgColor }}
      onClick={() => handleCheckOut()}
    >
      <button className="capitalize text-[18px]">Proceed to checkout</button>
    </div>
  );
}
