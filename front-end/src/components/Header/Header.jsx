import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// components
import Navbar from "../../shared/Navbar/Navbar";
// styles
import "./Header.scss";
// UI & icon
import Logo from "../../assets/Pictures/Logo2.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { PiShoppingCart } from "react-icons/pi";
import { HiOutlineXMark } from "react-icons/hi2";
// redux
import { useSelector } from "react-redux";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const cartItem = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    window.scroll(0, 0);
    setShowNav(false);
  }, []);
  console.log(">>> check render from home");
  return (
    <>
      <div className="header flex flex-row items-center justify-between border-[1px] fixed z-2 bg-[#fff] w-full pr-[20px] pl-[20px] pb-[5px] pt-[5px] border-none">
        <div className="menu">
          {!showNav ? (
            <BiMenuAltLeft
              className="lg:hidden cursor-pointer transition ease-in-out delay-150"
              size={30}
              onClick={() => {
                setShowNav(true);
              }}
            />
          ) : (
            <HiOutlineXMark
              className="lg:hidden cursor-pointer transition ease-in-out delay-150"
              size={30}
              onClick={() => {
                setShowNav(false);
              }}
            />
          )}
        </div>
        <div className="w-[10rem] h-[3rem] lg:w-[14rem] lg:h-[54px]  ">
          <NavLink to="/">
            <img
              className="translate-y-[-6px] lg:translate-y-[-8px]"
              src={Logo}
            ></img>
          </NavLink>
        </div>
        <Navbar
          className="!backdrop-blur-0 bg-white"
          show={showNav}
          setShow={setShowNav}
        ></Navbar>
        <div className="flex flex-row gap-[25px] justify-start items-center text-[25px]">
          <span className="relative ">
            <p
              className={`cart-number absolute text-[10px] right-[-5px] top-[-3px] rounded-[50%] bg-red-500 text-white w-[15px] flex flex-col items-center`}
            >
              {cartItem ? cartItem : ""}
            </p>
            <NavLink
              to="/cart"
              className="text-black"
              onClick={() => showNav(false)}
            >
              <PiShoppingCart />
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
