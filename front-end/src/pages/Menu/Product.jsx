import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
// styles
import "./Product.scss";
// components
import AddToCartButton from "../../components/Button/AddToCartButton";
import BuyNowButton from "../../components/Button/BuyNowButton";
// UI & Icon
import { FaBookmark } from "react-icons/fa6";
// fake data
import categoryData from "../../assets/FakeData/categories.json";
import raw from "../../assets/FakeData/products.json";
// redux
import { useSelector } from "react-redux";
export default function Product() {
  const responsiveCarousel = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 1,
    },
  };

  const { category } = useParams();
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart?.cart);

  const [products, setProducts] = useState([]);
  const [bannerCategory, setBannerCategory] = useState("");
  const [hover, setHover] = useState("");
  const [currentHover, setCurrentHover] = useState("");

  useEffect(() => {
    getProductList();
    window.scrollTo(0, 0);
  }, [category]);

  const getProductList = () => {
    raw.map((productItem) => {
      if (productItem.category === category) {
        setProducts(productItem.products);
      }
    });
    categoryData.map((categoryItem) => {
      if (categoryItem.name === category) {
        setBannerCategory(categoryItem.img);
      }
    });
  };
  const handleHover = (name) => {
    setCurrentHover(name);
    setHover("cart-button-hover-active");
  };
  return (
    <div>
      <div className=" bg-black">
        <div className="opacity-40 h-[170px]">
          <img
            draggable={false}
            className="h-full w-full object-cover select-none"
            src={bannerCategory}
          ></img>
        </div>
        <div className="flex flex-col absolute w-full h-[41.5%] justify-center top-0">
          <div className="flex flex-col items-center">
            <span className=" text-white text-[26px] flex flex-row gap-2 ">
              <NavLink
                draggable={false}
                to="/"
                className="text-white text-[26px] no-underline capitalize mb-2"
              >
                Home
              </NavLink>
              &gt;
              <NavLink
                draggable={false}
                to="/menus/all"
                className="text-white text-[26px] no-underline capitalize"
              >
                Menu
              </NavLink>
              &gt;
              <NavLink
                draggable={false}
                to="/menus/all"
                className="text-white text-[26px] no-underline capitalize"
              >
                {category}
              </NavLink>
            </span>
            <h3 className="text-white text-[28px] capitalize" draggable={false}>
              {category}
            </h3>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "rgb(241, 218, 178)" }}
        className="sticky top-[55px] pt-[8px] pb-[6px] z-[1]"
      >
        <Carousel
          responsive={responsiveCarousel}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {/* Category */}
          {categoryData &&
            categoryData.length > 0 &&
            categoryData.map((categoryItem) => {
              return (
                <NavLink
                  draggable={false}
                  key={categoryItem.id}
                  to={categoryItem.link}
                >
                  <div className="w-[30px] ml-auto mr-auto flex flex-col items-center select-none capitalize text-[14px]">
                    <img
                      className="w-full h-full object-cover"
                      src={categoryItem.icon}
                      draggable={false}
                    ></img>
                    {categoryItem.name}
                  </div>
                </NavLink>
              );
            })}
        </Carousel>
      </div>

      {/* Products */}
      <div className="mt-[50px] mb-[50px] relative z-[0]">
        {products &&
          products.length > 0 &&
          products.map((productItem) => {
            let isValidStock = productItem.stock > 0;
            return (
              <div
                key={productItem.id}
                className={`flex flex-col items-center gap-1  mb-[15%] transition-all ${
                  isValidStock > 0 ? "" : "grayscale"
                }`}
              >
                <div
                  className={`flex flex-col items-center gap-2 relative ${
                    isValidStock > 0
                      ? "hover:scale-[1.07] hover:transition-all transition-[.3s]"
                      : ""
                  }`}
                  onMouseEnter={() => handleHover(productItem.name)}
                  onMouseLeave={() => setHover("")}
                >
                  {productItem.stock <= 0 && (
                    <div className="absolute z-[1] w-full h-[85%] text-center flex flex-col justify-center text-[16px] text-white uppercase font-semibold">
                      <p>Sold out</p>
                    </div>
                  )}

                  <div
                    className="w-[250px] h-[200px] relative"
                    onClick={() =>
                      navigate(`/menus/${category}/${productItem.id}`)
                    }
                  >
                    <img
                      draggable={false}
                      className="rounded-lg w-full h-full object-cover cursor-pointer"
                      src={productItem.img}
                    ></img>
                    {cartItem.find((item) => item.id === productItem.id) && (
                      <span className="absolute right-0 top-0 flex flex-col items-center justify-center">
                        <FaBookmark
                          color="red"
                          size={40}
                          className="relative"
                        />
                        <p className="absolute top-[10px] m-0 text-white text-[11px] italic">
                          Added
                        </p>
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="flex flex-col gap-[5px] items-center">
                      <p className="m-0 text-[16px] font-[600]">
                        {productItem.name}
                      </p>
                      <p className="m-0 text-[14px]">
                        {(productItem.price * 1000).toLocaleString()}₫
                      </p>
                    </span>
                  </div>
                  {/* onhover button show */}
                  {isValidStock && (
                    <div
                      className={`cart-button-hover absolute bottom-[50px] w-full h-[25%] ${
                        productItem.name === currentHover && isValidStock
                          ? hover
                          : ""
                      }`}
                    >
                      <div className="w-full h-full flex flex-row gap-2 items-center pl-[10px] pr-[10px] z-[1]">
                        <AddToCartButton
                          product={productItem}
                          productQuantity={1}
                          fontSize="13px"
                          bgColor="white"
                        ></AddToCartButton>
                        <BuyNowButton
                          product={productItem}
                          productQuantity={1}
                          fontSize="13px"
                          bgColor="rgb(241, 218, 178)"
                        ></BuyNowButton>
                        <p className="m-0 absolute bg-black w-full h-full right-0 bottom-0 opacity-30 z-[-1] rounded-bl-md rounded-br-md"></p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
