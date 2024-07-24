import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
// icon & UI
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
// cpns
import Ingredient from "../../components/ProductIngredients/Ingredient";
import Nutrition from "../../components/ProductNutrition/Nutrition";
// styles
import "./ProductDetail.scss";
// fake data
import raw from "../../assets/FakeData/products.json";
import AddToCartButton from "../../components/Button/AddToCartButton";
// redux
import { useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa6";
import ProductStorage from "../../components/ProductStorage/ProductStorage";
import Related from "../../components/RelatedProducts/Related";
// main
export default function ProductDetail() {
  const cartItem = useSelector((state) => state.cart.cart);
  // state
  const { productId, category } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [relatedProduct, setRelatedProduct] = useState([]);
  // get product
  useEffect(() => {
    getProductDetail();
    switch (category) {
      case "bread":
        getRelatedProduct("coffee");
        break;
      case "pastry":
        getRelatedProduct("blended");
        break;
      case "sandwich":
        getRelatedProduct("coffee");
        break;
      case "cake":
        getRelatedProduct("tea");
        break;
      case "tea":
        getRelatedProduct("pastry");
        break;
      case "coffee":
        getRelatedProduct("bread");
        break;
      case "blended":
        getRelatedProduct("sandwich");
        break;
      default:
        getRelatedProduct("coffee");
        break;
    }
    window.scrollTo(0, 0);
  }, [productId]);

  const getProductDetail = () => {
    raw.map((categoryItem) => {
      if (categoryItem.category === category) {
        categoryItem.products.map((product) => {
          if (product.id === productId) {
            setProductDetail(product);
          }
        });
      }
    });
  };

  const getRelatedProduct = (category) => {
    raw.map((productItem) => {
      if (productItem.category === category) {
        setRelatedProduct(productItem.products);
      }
    });
  };

  const resetQuantity = () => {
    setProductQuantity(1);
  };

  const handleIncreaseQuantity = () => {
    if (productQuantity < productDetail.stock) {
      setProductQuantity(productQuantity + 1);
    } else return;
  };

  const handleDecreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    } else return;
  };
  console.log(">>> check render from product detail");

  return (
    <div className="capitalize lg:max-w-[1200px] lg:ml-auto lg:mr-auto">
      {/* direct */}
      <div className="sticky top-[58px] z-[1] backdrop-blur-md pt-[10px] pb-[10px] text-left lg:top-[64px] lg:mb-4">
        <span className="text-[20px] pl-[20px] ">
          <NavLink className="capitalize font-bold" to={`/menus/${category}`}>
            {category}{" "}
          </NavLink>
          &gt; {productDetail.name}
        </span>
      </div>

      {/* product detail */}
      <div className="pl-[25px] pr-[25px] md:flex md:flex-row md:gap-10 md:max-w-[800px] md:mr-auto md:ml-auto lg:max-w-[1200px]">
        <div className="w-full h-[250px] mt-[10px] mb-[10%] relative md:w-[70%] md:mb-[5%] lg:h-full lg:w-[110%]">
          <img
            draggable={false}
            className="rounded-lg w-[100%] h-[100%] object-cover"
            src={productDetail.img}
          ></img>
          {/* isAdd? */}
          {cartItem.find((item) => item.id === productDetail.id) && (
            <span className="absolute right-0 top-0 flex flex-col items-center justify-center">
              <FaBookmark color="red" size={40} className="relative" />
              <p className="absolute top-[10px] m-0 text-white text-[11px] italic">
                Added
              </p>
            </span>
          )}
        </div>
        <div className="w-full">
          <div className="mb-[6%] md:flex md:flex-col md:justify-between md:h-[86.5%] lg:flex lg:flex-col lg:justify-evenly">
            <h4 className="font-bold text-[32px] uppercase w-full lg:text-[24px]">
              {productDetail.name}
            </h4>
            <h3 className="text-[20px] text-gray-400 italic capitalize">
              #{category}
            </h3>
            <h4 className="mt-1 text-red-600 text-[24px]">
              {(productDetail.price * 1000).toLocaleString()}₫
            </h4>
            <div className="flex flex-row w-fit gap-3 items-center mt-3 justify-between">
              <div className="flex flex-row gap-4  items-center justify-between w-full border-gray-300 border pt-[6px] pb-[6px] pl-[15px] pr-[15px]">
                <FiMinus
                  className="cursor-pointer"
                  onClick={() => handleDecreaseQuantity()}
                />
                <p className="m-0 select-none text-[20px]">{productQuantity}</p>
                <GoPlus
                  className="cursor-pointer"
                  onClick={() => handleIncreaseQuantity()}
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-row gap-2 items-center mt-3 w-full ">
                <AddToCartButton
                  product={productDetail}
                  productQuantity={productQuantity}
                  resetQuantity={resetQuantity}
                  styles={{ paddingTop: "10px", paddingBottom: "10px" }}
                ></AddToCartButton>
              </div>
              <NavLink
                className="italic text-[16px] navlink-hover mt-2"
                to="/cart"
                style={{ "--line-hover": "#ff6d00" }}
              >
                Go to cart
              </NavLink>
            </div>
          </div>
        </div>
        <hr></hr>
        <h3 className="font-semibold text-[22px]">Product Detail </h3>
        <div className="">
          <Ingredient ingredients={productDetail.ingredients}></Ingredient>

          <Nutrition nutrition={productDetail.nutrition}></Nutrition>
        </div>
      </div>
      {category &&
        category !== "tea" &&
        category !== "coffee" &&
        category !== "blended" && <ProductStorage></ProductStorage>}
      <Related relatedProduct={relatedProduct}></Related>
    </div>
  );
}
