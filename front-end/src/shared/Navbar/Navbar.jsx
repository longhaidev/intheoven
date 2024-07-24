import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// components
import Language from "./Language";
// UI & Icon
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
// style
import "./Navbar.scss";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { doLogOut } from "../../redux/userSlice";
const Navbar = (props) => {
  const { show, setShow } = props;
  const navItemStyle =
    "font-[Alegreya] text-[20px] text-black no-underline capitalize mt-[5px] mb-[5px] w-full border-b-2 border-gray-300 leading-9 lg:border-0 lg:w-fit";

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.account);
  console.log(isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickLogOut = () => {
    dispatch(doLogOut());
    navigate("/");
  };
  return (
    <div
      className={` flex flex-col justify-between fixed top-[3.49rem] z-0 bg-white border-0 border-none w-full h-[calc(100%-3.49rem)] p-[16px] ${
        show ? "active" : "unactive"
      } lg:relative lg:top-0 lg:!left-[0%]  lg:flex-row lg:mb-0 lg:justify-between `}
    >
      <div className=" flex flex-col p-[5px] lg:flex-row lg:gap-[40px] lg:text-[20px] lg:justify-end cap">
        <NavLink
          to="/"
          className={` ${navItemStyle} lg:pt-0 `}
          onClick={() => setShow(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/menus/all"
          className={navItemStyle}
          onClick={() => setShow(false)}
        >
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
        <NavLink
          to="/about-us"
          className={navItemStyle}
          onClick={() => setShow(false)}
        >
          about us
        </NavLink>
        <NavLink
          to="/contact"
          className={navItemStyle}
          onClick={() => setShow(false)}
        >
          contact
        </NavLink>
        <NavLink
          to="/policy"
          className={navItemStyle}
          onClick={() => setShow(false)}
        >
          Policy
        </NavLink>
      </div>
      {/* user */}
      <div className="flex flex-col-reverse lg:flex lg:flex-row lg:items-center lg:gap-4">
        <div className="mt-[20px] flex flex-row gap-2 items-center lg:mt-0 ">
          <FaRegUserCircle className="text-3xl lg:text-xl" />
          <span className="uppercase font-bold text-lg flex flex-row items-center lg:text-[12px]">
            {isAuthenticated ? (
              <>
                <NavDropdown
                  className="font-[Alegreya] m-0 text-sm"
                  title={`Hello ${
                    user && user.username ? user.username : "User"
                  }`}
                >
                  <NavDropdown.Item>Ordered</NavDropdown.Item>
                  <NavDropdown.Item>Setting</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClickLogOut()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <p className="  font-[Alegreya] m-0 border-r-2 border-gray-200 pr-1 text-sm">
                  <NavLink
                    className="text-[18px] lg:text-[16px]"
                    to="/login"
                    onClick={() => setShow(false)}
                  >
                    Login
                  </NavLink>
                </p>
                <p className="  font-[Alegreya] m-0 pl-1 text-sm">
                  <NavLink
                    className="text-[18px] lg:text-[16px]"
                    to="/sign-up"
                    onClick={() => setShow(false)}
                  >
                    Sign up
                  </NavLink>
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
