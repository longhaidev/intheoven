import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
// img
import bannerImg from "../../assets/Pictures/Banner3.jpg";
import breadIcon from "../../assets/Pictures/bread-icon1.png";
import sandwitchIcon from "../../assets/Pictures/sandwich-icon1.png";
import teaIcon from "../../assets/Pictures/tea-icon1.png";
import cakeIcon from "../../assets/Pictures/cake-icon1.png";
import blendedIcon from "../../assets/Pictures/blended-icon1.png";
import pastryIcon from "../../assets/Pictures/pastry-icon1.png";
import coffeeIcon from "../../assets/Pictures/coffee-icon1.png";
// fake data
import categoryData from "../../assets/FakeData/categories.json";
import raw from "../../assets/FakeData/products.json";
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
  const [products, setProducts] = useState([]);
  const [bannerCategory, setBannerCategory] = useState("");

  useEffect(() => {
    raw.map((productItem) => {
      if (productItem.category === category) {
        setProducts(productItem.products);
      }
    });
    categoryData.map((categoryItem) => {
      if (categoryItem.category_name === category) {
        setBannerCategory(categoryItem.category_img);
      }
    });
    window.scrollTo(0, 0);
  }, [category]);
  return (
    <div>
      <div className=" bg-black">
        <div className="opacity-40 h-[250px]">
          <img
            draggable={false}
            className="h-full w-full object-cover select-none"
            src={bannerCategory}
          ></img>
        </div>
        <div className="flex flex-col absolute w-full top-[27%]">
          <div className="flex flex-col items-center">
            <span className=" text-white text-2xl flex flex-row gap-2 ">
              <NavLink
                draggable={false}
                to="/"
                className="text-white text-2xl no-underline capitalize mb-2"
              >
                Home
              </NavLink>
              &gt;
              <NavLink
                draggable={false}
                to="/menus/all"
                className="text-white text-2xl no-underline capitalize"
              >
                Menu
              </NavLink>
              &gt;
              <NavLink
                draggable={false}
                to="/menus/all"
                className="text-white text-2xl no-underline capitalize"
              >
                {category}
              </NavLink>
            </span>
            <h3 className="text-white text-5xl capitalize" draggable={false}>
              {category}
            </h3>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "rgb(241, 218, 178)" }}
        className="sticky top-[73px] pt-[12px] pb-[12px] z-[1]"
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
                  key={categoryItem.category_id}
                  to={categoryItem.category_link}
                >
                  <div className="w-[50px] ml-auto mr-auto flex flex-col items-center select-none capitalize">
                    <img
                      className="w-full h-full object-cover"
                      src={categoryItem.category_icon}
                      draggable={false}
                    ></img>
                    {categoryItem.category_name}
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
            return (
              <div
                key={productItem.id}
                className="flex flex-col items-center gap-1 mt-[40px] mb-[80px] transition-all hover:scale-[1.07] hover:transition-all cursor-pointer "
                onClick={() => navigate(`/menus/${category}/${productItem.id}`)}
              >
                <div className="w-[80%] h-[80%] flex flex-col items-center gap-2 ">
                  <div>
                    <img
                      draggable={false}
                      className="rounded-lg"
                      src={productItem.img}
                    ></img>
                  </div>
                  <div>
                    <span className="text-xl">{productItem.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
