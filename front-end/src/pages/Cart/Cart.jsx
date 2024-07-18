import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// UI & icon
import { MdOutlineCancel } from "react-icons/md";
import CheckOutButton from "../../components/Button/CheckOutButton";
import PageDirect from "../../components/PageDirect/PageDirect";
import emptyCart from "../../assets/Pictures/empty-cart.png";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { increaseProductQuantity } from "../../redux/cartSlice";
import { decreaseProductQuantity } from "../../redux/cartSlice";
// main
export default function Cart() {
  const cartItem = useSelector((state) => state.cart.cart);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleIncreaseQuantity = (product) => {
    if (product) {
      dispatch(increaseProductQuantity(product));
    }
  };
  const handleDecreaseQuantity = (product) => {
    if (product) {
      if (product.quantity === 1) {
        handleRemoveFromCart(product);
      } else {
        dispatch(decreaseProductQuantity(product));
      }
    }
  };
  console.log("check render from cart");
  return (
    <div>
      <PageDirect pageName="Cart"></PageDirect>
      {cartItem && cartItem.length > 0 && cartPrice != 0 ? (
        <div className="pl-[20px] pr-[20px] mt-[6%] mb-[20px]">
          {cartItem.map((productItem) => {
            return (
              <div
                key={productItem.id}
                className="mb-[45px] flex flex-col items-center"
              >
                <div className="w-full h-[250px] mb-[15px] relative flex flex-col justify-center">
                  <MdOutlineCancel
                    color="white"
                    size={21}
                    className="absolute right-[5px] top-[5px]"
                    onClick={() => handleRemoveFromCart(productItem)}
                  ></MdOutlineCancel>
                  <img
                    className="object-cover w-full h-full rounded-md"
                    draggable={false}
                    src={productItem.img}
                    alt="Product Image"
                  ></img>
                </div>
                {/* product detail */}
                <div className="pl-[10px] pr-[10px] w-full">
                  <div>
                    <span className="flex flex-row gap-3 w-full justify-between text-right">
                      <p className="m-0 font-semibold">Product: </p>
                      <p className="m-0 uppercase">{productItem.name}</p>
                    </span>
                    <span className="flex flex-row gap-3 w-full justify-between text-right">
                      <p className="m-0 font-semibold">Price: </p>
                      <p className="m-0">
                        {(productItem.price * 1000).toLocaleString()} VND
                      </p>
                    </span>
                    <span className="flex flex-row gap-3 w-full justify-between text-right">
                      <p className="m-0 font-semibold">Quantity: </p>
                      <span className="flex flex-row gap-2 items-center pl-[8px] pr-[8px]">
                        <FiMinus
                          onClick={() => handleDecreaseQuantity(productItem)}
                        ></FiMinus>
                        <p className="m-0">{productItem.quantity} </p>
                        <GoPlus
                          onClick={() => {
                            handleIncreaseQuantity(productItem);
                          }}
                        ></GoPlus>
                      </span>
                    </span>
                    <span className="flex flex-row gap-3 w-full justify-between text-right">
                      <p className="m-0 font-semibold">Subtotal: </p>
                      <p className="m-0 text-red-700 font-semibold">
                        {(
                          productItem.quantity *
                          productItem.price *
                          1000
                        ).toLocaleString()}{" "}
                        VND
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <div>
            <p className="w-full border border-gray-400"></p>
            <span className="flex flex-row gap-2 w-full justify-end items-center">
              <h3 className="text-[14px] m-0 capitalize">Subtotal</h3>
              <p className="m-0 text-red-700 font-semibold text-[20px]">
                {(cartPrice * 1000).toLocaleString()} VND
              </p>
            </span>
            <p className="italic text-[14px] text-right">
              Shipping & taxes calculated at checkout
            </p>
            <CheckOutButton
              style={
                "w-full p-[15px] text-center text-black text-xl rounded-md cursor-pointer"
              }
              bgColor={"rgb(250 174 41)"}
            ></CheckOutButton>
            <div className="text-center w-full mt-2">
              <NavLink
                className="italic text-[14px] navlink-hover "
                to="/menus/all"
                style={{ "--line-hover": "rgb(241, 218, 178)" }}
              >
                Continue Browsing
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center pl-[20px] pr-[20px] mt-[6%] mb-[20px]">
          <div>
            <h5 className="text-gray-500 italic">
              {" "}
              Oops, Your cart is empty !
            </h5>
          </div>
          <div className="w-[250px] h-[250px]">
            <img
              className="w-full h-full object-cover"
              draggable={false}
              src={emptyCart}
            ></img>
          </div>
          <NavLink
            className="navlink-hover italic text-gray-500 text-[14px]"
            style={{ "--line-hover": "rgb(241, 218, 178)" }}
            to="/menus/all"
          >
            Continue Browsing
          </NavLink>
        </div>
      )}
    </div>
  );
}
