import React from "react";
// redux
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
export default function AddToCartButton(props) {
  const { fontSize, bgColor, product, productQuantity, resetQuantity } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      product.quantity = productQuantity;
      dispatch(addToCart(product));
      if (productQuantity != 1) {
        resetQuantity();
      }
    }
  };
  return (
    <div
      className="p-2 w-full flex justify-center cursor-pointer z-[0] hover:scale-[1.045] transition-all"
      style={{ backgroundColor: `${bgColor ?? "rgb(241, 218, 178)"}` }}
      onClick={() => handleAddToCart()}
    >
      <div>
        <p className={`relative m-0 !text-[${fontSize ?? "18px"}]`}>
          Add To Cart
        </p>
      </div>
    </div>
  );
}
