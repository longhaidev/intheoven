import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import "./Navbar.scss";
import Language from "./Language";
const Navbar = (props) => {
  const { show, setShow } = props;

  const navItemStyle =
    "font-[Alegreya] text-[16px] text-black no-underline uppercase w-full border-b-2 border-gray-300 leading-9 lg:border-0 lg:w-fit";

  // FAKE DATA
  const isAuth = false;

  return (
    <div
      className={` flex flex-col fixed top-[4.4rem] z-0 bg-white border-0 border-none w-full h-full pl-5 pr-5 ${
        show ? "active" : "unactive"
      } lg:relative lg:top-0 lg:!left-[0%]  lg:flex-row lg:mb-0 lg:justify-between `}
    >
      <span className="flex flex-row items-center gap-3 mt-[20px] lg:hidden">
        <GoSearch size={25} className="cursor-pointer font-bold " />
        <input
          placeholder="Search your bake here..."
          className="uppercase w-full focus:outline-0 lg:hidden"
        ></input>
      </span>
      <div className="flex flex-col lg:flex-row lg:gap-[50px] ">
        <NavLink
          to="/"
          className={`${navItemStyle} pt-[24px] lg:pt-0 onhover`}
          onClick={() => setShow(false)}
        >
          Home
        </NavLink>
        <NavLink to="/menus/all" className={navItemStyle}>
          menu
        </NavLink>
        <NavDropdown title="Bakery" className={navItemStyle}>
          <NavDropdown.Item href="/menus/bread">Bread</NavDropdown.Item>
          <NavDropdown.Item href="/menus/pastry">Pastry</NavDropdown.Item>
          <NavDropdown.Item href="/menus/cake">Cake</NavDropdown.Item>
          <NavDropdown.Item href="/menus/sandwich">sandwich</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Beverages" className={navItemStyle}>
          <NavDropdown.Item href="/menus/tea">Tea</NavDropdown.Item>
          <NavDropdown.Item href="/menus/coffee">Cofee</NavDropdown.Item>
          <NavDropdown.Item href="/menus/blended">Blended</NavDropdown.Item>
        </NavDropdown>
        <NavLink className={navItemStyle}> introduce</NavLink>
        <NavLink className={navItemStyle}> contact</NavLink>
      </div>
      <div className="flex flex-col-reverse lg:flex lg:flex-row lg:items-center lg:gap-4">
        <div className="mt-[20px] flex flex-row gap-2 items-center lg:mt-0 ">
          <FaRegUserCircle className="text-3xl lg:text-xl" />
          <span className="uppercase font-bold text-lg flex flex-row items-center lg:text-[12px]">
            {isAuth ? (
              <>
                <NavDropdown
                  className="font-[Alegreya] m-0 text-sm"
                  title={`Hello user`}
                >
                  <NavDropdown.Item>Ordered</NavDropdown.Item>
                  <NavDropdown.Item>Setting</NavDropdown.Item>
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <p className=" font-[Alegreya] m-0 border-r-2 border-gray-200 pr-1 text-sm">
                  <NavLink to="/login">Login</NavLink>
                </p>
                <p className=" font-[Alegreya] m-0 pl-1 text-sm">
                  <NavLink to="/sign-up"></NavLink>
                  Sign up
                </p>
              </>
            )}
          </span>
        </div>
        <Language></Language>
      </div>
    </div>
  );
};
export default Navbar;
