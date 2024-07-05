import { NavLink } from "react-router-dom";
import Logo from "../../assets/Pictures/Logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { CgMenuRound } from "react-icons/cg";
import Navbar from "../../shared/Navbar/Navbar";
import Language from "../../shared/Navbar/Language";
import { useEffect, useState } from "react";
import { set } from "lodash";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    setShowNav(false);
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-between border-[1px] fixed z-2 bg-[#fff] w-full pr-[20px] pl-[20px] pb-[20px] pt-[5px]">
        <div className="menu">
          <CgMenuRound
            className="lg:hidden"
            size={35}
            onClick={() => {
              setShowNav(!showNav);
            }}
          />
        </div>
        <div className="w-48 h-12">
          <NavLink to="/">
            <img src={Logo}></img>
          </NavLink>
        </div>

        <Navbar
          className="!backdrop-blur-0 bg-white"
          show={showNav}
          setShow={setShowNav}
        ></Navbar>
        <div className="flex flex-row gap-[25px] justify-start items-center text-[25px]">
          <span className="relative">
            <p className="cart-number absolute text-[10px] right-[-5px] top-[-3px] rounded-[50%] bg-red-500 text-white w-[15px] flex flex-col items-center">
              0
            </p>
            <NavLink to="/cart" className="text-black">
              <CiShoppingCart />
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
