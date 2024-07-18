import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// cpns
import Navbar from "../../shared/Navbar/Navbar";
// styles
import "./Header.scss";
// UI & icon
import Logo from "../../assets/Pictures/Logo2.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { PiShoppingCart } from "react-icons/pi";
// redux
import { useSelector } from "react-redux";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const cartItem = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    setShowNav(false);
  }, []);
  return (
    <>
      <div className="header flex flex-row items-center justify-between border-[1px] fixed z-2 bg-[#fff] w-full pr-[20px] pl-[20px] pb-[5px] pt-[5px] border-none">
        <div className="menu">
          <BiMenuAltLeft
            className="lg:hidden"
            size={30}
            onClick={() => {
              setShowNav(!showNav);
            }}
          />
        </div>
        <div className="w-[10rem] h-[3rem]">
          <NavLink to="/">
            <img className="translate-y-[-6px]" src={Logo}></img>
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
