import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PageDirect from "../../components/PageDirect/PageDirect";
import { useSelector } from "react-redux";
// custome style
import "./Checkout.scss";
// UI & icon
import {
  FormControlLabel,
  MenuItem,
  RadioGroup,
  TextField,
  Radio,
  FormControl,
} from "@mui/material";
import ConfirmOrder from "../../components/Button/ConfirmOrder";

export default function Checkout() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  // state
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [shipMethod, setShipMethod] = useState("cod");
  const [payment, setPayment] = useState("cash");
  const [product, setProduct] = useState([]);
  // redux
  const cartItem = useSelector((state) => state.cart.cart);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotal = useSelector((state) => state.cart.totalQuantity);
  const citySelect = [
    {
      value: "HCM",
      label: "Ho Chi Minh City",
    },
    {
      value: "HN",
      label: "Ha Noi City",
    },
    {
      value: "DN",
      label: "Da Nang City",
    },
  ];

  const handlePlaceOrder = () => {
    console.log("Ordered");
  };
  console.log(">>> check render from checkout");
  return (
    <div>
      <PageDirect pageName="checkout"></PageDirect>
      <div className="pl-[20px] pr-[20px] !mb-[30px] !mt-[30px] lg:max-w-[1200px] lg:w-[1200px] lg:mr-auto lg:ml-auto">
        <div className="mb-4">
          <h4 className="mb-4 text-[20px] font-semibold md:text-[22px]">
            Billing Details
          </h4>
          <div className="mb-2">
            <h6 className="font-semibold mb-2 text-[18px] md:text-[20px]">
              Delivery
            </h6>
            <TextField
              size="small"
              className="w-full mb-3"
              id="outlined-basic"
              label="Full name"
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />
            <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-4">
              <TextField
                size="small"
                className="w-full mb-3"
                id="outlined-basic"
                label="Full address"
                variant="outlined"
                onChange={(event) => setAddress(event.target.value)}
              />
              <TextField
                size="small"
                className="w-full mb-3"
                select
                id="outlined-basic"
                label="City"
                variant="outlined"
                defaultValue="HCM"
                onChange={(event) => setCity(event.target.value)}
              >
                {citySelect.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-4">
              <TextField
                size="small"
                className="w-full mb-3"
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                onChange={(event) => setPhone(event.target.value)}
              />
              <TextField
                size="small"
                className="w-full mb-3"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <TextField
              size="small"
              className="w-full"
              id="outlined-multiline-static"
              label="Note"
              multiline
              rows={4}
              onChange={(event) => setNote(event.target.value)}
            />
            <div className="mt-1">
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="ship"
                  name="row-adio-buttons-group"
                  onChange={(event) => setShipMethod(event.target.value)}
                >
                  <FormControlLabel
                    value="ship"
                    control={<Radio size="small" />}
                    label="Ship"
                  />
                  <FormControlLabel
                    value="instore"
                    control={<Radio size="small" />}
                    label="Pickup in store"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-[18px]">Payment Method</h6>
            <p className="text-[16px] text-gray-400 m-0 italic  ">
              All transactions are secure and encrypted.
            </p>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="cash"
                name="row-adio-buttons-group"
                onChange={(event) => setPayment(event.target.value)}
              >
                <FormControlLabel
                  value="cash"
                  control={<Radio size="small" />}
                  label="Cash on Delivery"
                />
                <FormControlLabel
                  disabled
                  value="online"
                  control={<Radio size="small" />}
                  label="MOMO"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div>
          <h4 className="text-[20px] font-semibold md:text-[22px]">
            Your order
          </h4>
          <div>
            <span className="flex flex-row gap-2 items-center">
              <h6 className="text-[18px] font-semibold md:text-[20px]">
                Products:{" "}
              </h6>
              {cartTotal && (
                <p className="mb-[8px] text-[18px] md:text-[20px]">
                  {cartTotal} total
                </p>
              )}
            </span>
            <div className="p-[25px] border border-gray-300 rounded-sm mb-3 overflow-scroll h-full md:h-[400px] ">
              {cartItem && cartItem.length > 0 ? (
                cartItem.map((productItem) => {
                  return (
                    <div
                      key={productItem.id}
                      className={`flex flex-row justify-between ${
                        cartItem.length > 1
                          ? " mb-3 border-b border-b-gray-200 md:pb-[10px]"
                          : ""
                      } `}
                    >
                      <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                        <img
                          className="w-full h-full object-cover rounded-md"
                          src={productItem.img}
                        ></img>
                      </div>
                      <div>
                        <span className="text-right">
                          <p className="md:text-[18px]">{productItem.name}</p>
                          <span className="flex flex-row gap-2 justify-end md:text-[18px]">
                            {productItem.quantity} x{" "}
                            <p className="text-red-700 font-semibold">
                              {(productItem.price * 1000).toLocaleString()}₫
                            </p>
                          </span>
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-gray-300 font-[14px] italic">
                  Empty Cart
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full text-[18px]">
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-gray-500">Subtotal</p>
                <p className="text-red-700 font-semibold">
                  {(cartPrice * 1000).toLocaleString()}₫
                </p>
              </span>
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-gray-500">Shipping estimate</p>
                <p className="text-red-700 font-semibold">
                  {(cartPrice * 0.008 * 1000).toLocaleString()}₫
                </p>
              </span>
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-gray-500">Tax estimate</p>
                <p className="text-red-700 font-semibold">
                  {(cartPrice * 0.05 * 1000).toLocaleString()}₫
                </p>
              </span>
            </div>
            <h3 className="text-[20px]  w-full  font-semibold mt-[1rem]">
              <span className="flex flex-row justify-between">
                <p>Order total</p>
                <p className="text-red-700">
                  {(
                    (cartPrice + cartPrice * 0.05 + cartPrice * 0.1) *
                    1000
                  ).toLocaleString()}
                  ₫
                </p>
              </span>
            </h3>
          </div>
        </div>
        {/* <div
          onClick={() => handlePlaceOrder()}
          className="w-full p-[15px] text-center text-black text-xl rounded-md cursor-pointer mb-2 mt-4"
          style={{ backgroundColor: "rgb(250 174 41)" }}
        >
          <button className=" text-[18px] capitalize">Place Checkout</button>
        </div> */}
        <ConfirmOrder
          styles={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderRadius: "70px",
          }}
        ></ConfirmOrder>
        <div className="w-full text-center mt-[8px] mb-3">
          <NavLink
            to="/cart"
            className="navlink-hover  text-[14px] italic md:text-[16px]"
            style={{ "--line-hover": "#ff6d00" }}
          >
            Back to cart ?
          </NavLink>
        </div>
      </div>
    </div>
  );
}
