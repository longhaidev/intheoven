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
import ProductCard from "../../components/ProductCard/ProductCard";
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

  return (
    <div>
      <div className=" bg-black relative">
        <div className="opacity-40 h-[170px]">
          <img
            draggable={false}
            className="h-full w-full object-cover select-none"
            src={bannerCategory}
          ></img>
        </div>
        <div className="flex flex-col absolute w-full h-full justify-center items-center top-0">
          <div className="flex flex-col items-center">
            <h3
              className="text-white text-[24px] capitalize font-semibold"
              draggable={false}
            >
              {category}
            </h3>
            <span className=" text-white text-[20px] flex flex-row gap-2 ">
              <NavLink
                draggable={false}
                to="/"
                className="text-white  no-underline capitalize mb-2"
              >
                Home
              </NavLink>
              &gt;
              <NavLink
                draggable={false}
                to="/menus/all"
                className="text-white  no-underline capitalize"
              >
                Menu
              </NavLink>
              &gt;
              <NavLink
                draggable={false}
                to="/menus/all"
                className="text-white  no-underline capitalize"
              >
                {category}
              </NavLink>
            </span>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "rgb(241, 218, 178)" }}
        className="sticky top-[55px] pt-[8px] pb-[6px] z-[1] "
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
                  <div className="w-[25px] pt-[5px] ml-auto mr-auto flex flex-col items-center select-none capitalize text-[14px] md:w-[30px]">
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
      <div className="mt-[20px] mb-[20px] flex flex-col items-center relative z-[0]">
        <h2 className="text-left w-full pl-[9%] pr-[9%] capitalize text-[24px] font-semibold">
          {category}
        </h2>
        <div className="md:pl-[45px] md:pr-[45px]">
          <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-between md:gap-1 ">
            {products &&
              products.length > 0 &&
              products.map((productItem) => {
                return (
                  <ProductCard
                    key={productItem.id}
                    category={category}
                    productItem={productItem}
                  ></ProductCard>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
