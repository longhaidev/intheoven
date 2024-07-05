import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
// icon & UI
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import {
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Table,
  TableBody,
} from "@mui/material";
// fake data
import raw from "../../assets/FakeData/products.json";
import AddToCartButton from "../../components/Button/AddToCartButton";
import BuyNowButton from "../../components/Button/BuyNowButton";

export default function ProductDetail() {
  const { productId, category } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [productQuantity, setProductQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    raw.map((categoryItem) => {
      if (categoryItem.category === category) {
        categoryItem.products.map((product) => {
          if (product.id === productId) {
            setProductDetail(product);
          }
        });
      }
    });
    window.scrollTo(0, 0);
  }, [productId]);

  function createData(ingredients, nutrition) {
    return { ingredients, nutrition };
  }
  const rows = [
    createData("Calories", productDetail?.nutrition?.calories),
    createData("Total Fat", productDetail?.nutrition?.total_fat),
    createData("Saturated Fat", productDetail?.nutrition?.saturated_fat),
    createData("Trans Fat", productDetail?.nutrition?.trans_fat),
    createData("Total Carbohydrate", productDetail?.nutrition?.total_carb),
    createData("Total Sugar", productDetail?.nutrition?.total_sugar),
    createData("Protein", productDetail?.nutrition?.protein),
  ];
  const handleAddToCart = () => {
    setTotalPrice(productQuantity * productDetail.price);
    console.log(totalPrice);
  };
  const handleIncreaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (productQuantity <= 0) {
      return;
    }
    setProductQuantity(productQuantity - 1);
    setTotalPrice(productDetail.price * productQuantity);
  };
  console.log(productQuantity);

  return (
    <div className="capitalize p-[20px]">
      <div>
        <span className="text-xl ">
          <NavLink className="capitalize font-bold" to={`/menus/${category}`}>
            {category}{" "}
          </NavLink>
          &gt; {productDetail.name}
        </span>
      </div>
      <div className="w-[85%] h-[250px] ml-auto mr-auto max-[200px] mt-[20px] mb-[20px]">
        <img
          draggable={false}
          className="rounded-lg w-[100%] h-[100%] object-cover"
          src={productDetail.img}
        ></img>
      </div>
      {productDetail.ingredients ? (
        <div>
          <h4 className="uppercase">ingredients</h4>
          <p>{productDetail.ingredients}</p>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <TableContainer>
          <Table sx={{ minWidth: 150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>nutrition</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.ingredients}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.ingredients}
                  </TableCell>

                  <TableCell align="right">{row.nutrition}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <h4 className="uppercase mt-3 font-bold">{productDetail.name}</h4>
        <h4 className="uppercase mt-3 text-red-600">
          {(productDetail.price * 1000).toLocaleString()} vnd
        </h4>
        <div className="flex flex-row gap-3 items-center  mt-3">
          <h3>Quantity</h3>
          <div className="flex flex-row gap-4  items-center border-gray-300 border-2 w-fit pt-[5px] pb-[5px] pl-[10px] pr-[10px] ">
            <FiMinus
              className="cursor-pointer"
              onClick={() => handleDecreaseQuantity()}
            />
            <p className="m-0 select-none">{productQuantity}</p>
            <GoPlus
              className="cursor-pointer"
              onClick={() => handleIncreaseQuantity()}
            />
          </div>
          <span className="text-[17px] text-[#9b9a9a]">
            Instock: {productDetail.stock}
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center mt-3  ">
          <AddToCartButton bgColor={"rgb(241, 218, 178)"}></AddToCartButton>
          <BuyNowButton bgColor={"rgb(250 174 41)"}></BuyNowButton>
        </div>
      </div>
    </div>
  );
}
