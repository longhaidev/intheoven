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
  console.log(">>> check render");
  return (
    <div>
      <PageDirect pageName="checkout"></PageDirect>
      <div className="pl-[20px] pr-[20px] !mb-[30px] !mt-[30px]">
        <div className="mb-4">
          <h4 className="mb-4 text-[20px] font-semibold">Billing Details</h4>
          <div className="mb-2">
            <h6 className="font-semibold mb-2">Delivery</h6>
            <TextField
              size="small"
              className="w-full mb-3"
              id="outlined-basic"
              label="Full name"
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />
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
            <h6 className="font-semibold">Payment Method</h6>
            <p className="text-[14px] text-gray-400 m-0">
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
          <h4 className="text-[20px] font-semibold">Your order</h4>
          <div>
            <span className="flex flex-row gap-2 items-center">
              <h6 className="text-[16px] font-semibold">Products: </h6>
              {cartTotal && (
                <p className="mb-[8px] text-[16px]">{cartTotal} total</p>
              )}
            </span>
            <div className="p-[10px] border border-gray-300 rounded-sm mb-3">
              {cartItem && cartItem.length > 0 ? (
                cartItem.map((productItem) => {
                  return (
                    <div
                      key={productItem.id}
                      className={`flex flex-row justify-between ${
                        cartItem.length > 1
                          ? " mb-3 border-b border-b-gray-200"
                          : ""
                      } `}
                    >
                      <div className="w-[70px] h-[70px]">
                        <img
                          className="w-full h-full object-cover rounded-md"
                          src={productItem.img}
                        ></img>
                      </div>
                      <div>
                        <span className="text-right">
                          <p>{productItem.name}</p>
                          <span className="flex flex-row gap-2 justify-end">
                            {productItem.quantity} x{" "}
                            <p className="text-red-700 font-semibold">
                              {(productItem.price * 1000).toLocaleString()}
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
            <span className="flex flex-row gap-2 mb-2 w-full justify-between">
              <h5 className="m-0  text-[16px]">Subtotal</h5>
              <p className="m-0 text-[16px]">
                {cartPrice ? (cartPrice * 1000).toLocaleString() : "0"}
              </p>
            </span>
            <span className="flex flex-row gap-2 mb-2 w-full justify-between">
              <h5 className="m-0 text-[16px]">Shipping</h5>
              <p className="m-0 text-[16px]">50.000</p>
            </span>
            <span className="flex flex-row gap-2 mb-2 w-full justify-between text-red-700 font-bold">
              <h5 className="m-0 text-[16px] font-semibold">Total</h5>
              <p className="m-0 text-[16px]">
                {cartPrice ? ((cartPrice + 50) * 1000).toLocaleString() : "0"}
              </p>
            </span>
          </div>
        </div>
        <div
          onClick={() => handlePlaceOrder()}
          className="w-full p-[15px] text-center text-black text-xl rounded-md cursor-pointer mb-2 mt-4"
          style={{ backgroundColor: "rgb(250 174 41)" }}
        >
          <button className=" text-[18px] capitalize">Place Checkout</button>
        </div>
        <div className="w-full text-center mb-3">
          <NavLink
            to="/cart"
            className="navlink-hover capitalize text-[14px] italic"
            style={{ "--line-hover": "rgb(241, 218, 178)" }}
          >
            back to cart ?
          </NavLink>
        </div>
      </div>
    </div>
  );
}
