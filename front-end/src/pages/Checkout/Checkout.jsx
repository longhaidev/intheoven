import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Yup from "yup";
// components
import PageDirect from "components/PageDirect/PageDirect";
import ConfirmOrder from "components/Button/ConfirmOrder";
// custom style
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
import { LuContact2 } from "react-icons/lu";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandLess } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
//
export default function Checkout() {
  // fake data
  const userAddress = [
    {
      id: "",
      user_id: "",
      user_name: "",
      user_phone: "",
      user_address: "",
      is_default: "",
    },
  ];
  // redux
  const cartItem = useSelector((state) => state.cart.cart);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotal = useSelector((state) => state.cart.totalQuantity);
  // state
  const [errorMsg, setErrorMsg] = useState({});
  const [formCheckout, setFormCheckout] = useState({
    name: "",
    email: "",
    city: "",
    address: "",
    note: "",
    shipMethod: "cod",
    payment: "cash",
    product: cartItem ?? [],
    totalPrice: cartPrice ?? 0,
  });
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

  const handleOnChangeForm = async (event) => {
    const { name, value } = event.target;
    setFormCheckout({
      ...formCheckout,
      [name]: value,
    });
  };
  const validateSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email().required("Invalid Email"),
    address: Yup.string().required("Required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Required"),
  });
  const handlePlaceOrder = async () => {
    try {
      await validateSchema.validate(formCheckout, { abortEarly: false });
      console.log("Submit Order: ", formCheckout);
    } catch (err) {
      const newError = {};
      err.inner.forEach((error) => {
        newError[error.path] = error.message;
      });
      setErrorMsg(newError);
    }
  };
  console.log(">>> check render from checkout");
  return (
    <div>
      <PageDirect pageName="checkout"></PageDirect>
      <div className="pl-[20px] pr-[20px] !mb-[30px] !mt-[30px] lg:max-w-[1200px] lg:w-[1200px] lg:mr-auto lg:ml-auto">
        <div className="mb-4">
          <h4 className="text-[20px] font-semibold md:text-[22px]">
            Billing Details
          </h4>
          <div className="mb-2">
            {/* contact info */}
            <Accordion
              defaultExpanded
              sx={{
                marginBottom: "0px!important",
                boxShadow: "none",
                border: "0.5px gray",
              }}
            >
              <AccordionSummary expandIcon={<MdExpandLess />}>
                <h6 className="font-semibold mb-2 text-[18px] md:text-[20px]">
                  <span className="flex flex-row items-center gap-2">
                    <LuContact2 /> Contact Infomation
                  </span>
                </h6>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  error={errorMsg.name ? true : false}
                  size="small"
                  className="w-full mb-3"
                  label="Full name"
                  id="outlined-basic"
                  name="name"
                  helperText={`${errorMsg.name ? errorMsg.name : ""}`}
                  variant="outlined"
                  onChange={handleOnChangeForm}
                />
                <div className="flex flex-row items-center gap-2">
                  <TextField
                    sx={{ marginBottom: "0px!important" }}
                    error={errorMsg.phone ? true : false}
                    size="small"
                    className="w-full mb-3"
                    id="outlined-basic"
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    helperText={`${errorMsg.phone ? errorMsg.phone : ""}`}
                    onChange={handleOnChangeForm}
                  />
                  <TextField
                    sx={{ marginBottom: "0px!important" }}
                    error={errorMsg.email ? true : false}
                    size="small"
                    className="w-full mb-3"
                    id="outlined-basic"
                    label="Email"
                    name="email"
                    variant="outlined"
                    helperText={`${errorMsg.email ? errorMsg.email : ""}`}
                    onChange={handleOnChangeForm}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            {/* Shipping address */}
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<MdExpandLess />}>
                <h6 className="font-semibold mb-2 text-[18px] md:text-[20px]">
                  <span className="flex flex-row items-center gap-2">
                    <MdOutlineLocalShipping /> Shipping Address
                  </span>
                </h6>
              </AccordionSummary>
              <AccordionDetails>
                <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-4">
                  <TextField
                    error={errorMsg.address ? true : false}
                    size="small"
                    className="w-full mb-3"
                    id="outlined-basic"
                    label="Full address"
                    name="address"
                    variant="outlined"
                    helperText={`${errorMsg.address ? errorMsg.address : ""}`}
                    onChange={handleOnChangeForm}
                  />
                  <TextField
                    size="small"
                    className="w-full mb-3"
                    select
                    id="outlined-basic"
                    label="City"
                    name="city"
                    variant="outlined"
                    defaultValue="HCM"
                    onChange={handleOnChangeForm}
                  >
                    {citySelect.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="mt-1">
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="ship"
                      name="shipMethod"
                      onChange={handleOnChangeForm}
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
              </AccordionDetails>
            </Accordion>
          </div>
          {/* payment method */}
          <div>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<MdExpandLess />}>
                <span className="flex flex-row gap-2 justify-center items-center">
                  <MdOutlinePayment></MdOutlinePayment>
                  <h6 className="font-semibold text-[18px] m-0">
                    Payment Method
                  </h6>
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-[16px] text-color-sub m-0 italic  ">
                  All transactions are secure and encrypted.
                </p>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="cash"
                    name="payment"
                    onChange={handleOnChangeForm}
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
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-[20px]">
            <TextField
              size="small"
              className="w-full"
              id="outlined-multiline-static"
              label="Note"
              name="note"
              multiline
              rows={4}
              onChange={handleOnChangeForm}
            />
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
            <div
              className={`p-[25px] border border-gray-300 rounded-sm mb-3 overflow-scroll h-full ${
                cartItem.length <= 0 ? "" : "md:h-[400px]"
              }`}
            >
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
                            <p className="text-color-high-light font-semibold">
                              {(productItem.price * 1000).toLocaleString()}₫
                            </p>
                          </span>
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-color-sub font-[14px] italic">
                  Empty Cart
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full text-[18px]">
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-color-sub">Subtotal</p>
                <p className="text-color-high-light font-semibold">
                  {(cartPrice * 1000).toLocaleString()}₫
                </p>
              </span>
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-color-sub">Shipping estimate</p>
                <p className="text-color-high-light font-semibold">
                  {(cartPrice * 0.008 * 1000).toLocaleString()}₫
                </p>
              </span>
              <span className="flex flex-row justify-between border-b border-b-gray-300 mt-[1rem]">
                <p className="text-color-sub">Tax estimate</p>
                <p className="text-color-high-light font-semibold">
                  {(cartPrice * 0.05 * 1000).toLocaleString()}₫
                </p>
              </span>
            </div>
            <h3 className="text-[20px]  w-full  font-semibold mt-[1rem]">
              <span className="flex flex-row justify-between">
                <p>Order total</p>
                <p className="text-color-high-light">
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
        <ConfirmOrder
          styles={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderRadius: "70px",
          }}
          handlePlaceOrder={handlePlaceOrder}
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
