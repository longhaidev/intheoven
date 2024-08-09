import React, { useState } from "react";
import "./ModalAddAddress.scss";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "components/Button/CustomButton";
// validate
import { userNewAddressFormSchema } from "utils/Validators/validateSchema";
// dummy data
import { cityOptions } from "assets/FakeData/FakeData";
export default function ModalAddAddress(props) {
  const { show, setShow } = props;
  const INITIALADDRESS = {
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: INITIALADDRESS,
    resolver: yupResolver(userNewAddressFormSchema),
  });
  const handleCloseModal = () => {
    setShow(false);
    reset();
  };
  const handleAddNewAddress = (data) => {
    console.log(data);
    // not to let reset here, need to call api make promise to check if success then reset in useEffect - back when working on back-end
    reset();
    handleCloseModal();
  };
  return (
    <div
      className={`fixed ${
        show ? "show-overlay" : "hide-overlay"
      } top-0 left-0 h-full z-[99] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] p-4 md:w-full`}
    >
      <div className="w-full h-full flex flex-col justify-center md:flex-row md:items-center">
        <div
          className={`${
            show ? "show-box" : "hide-box"
          } w-full bg-white rounded-lg shadow-md p-3 md:w-[70%] md:h-fit lg:w-[50%]`}
        >
          <div>
            <h3 className="text-[22px] mb-3">Create new address</h3>
            <TextField
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="Full Name"
              name="name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name ? errors?.name.message : ""}
              {...register("name")}
            />
            <span className="flex flex-row gap-2">
              <TextField
                className="w-full mb-3"
                size="small"
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name ? errors?.name.message : ""}
                {...register("email")}
              />

              <TextField
                className="w-full mb-3"
                size="small"
                id="outlined-basic"
                label="Phone number"
                name="phone"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone ? errors?.phone.message : ""}
                {...register("phone")}
              />
            </span>

            <TextField
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="City"
              name="city"
              variant="outlined"
              error={!!errors.city}
              helperText={errors.city ? errors?.city.message : ""}
              {...register("city")}
            />

            <TextField
              className="w-full mb-3 normal-case"
              size="small"
              id="outlined-basic"
              label="Full Address"
              name="address"
              variant="outlined"
              error={!!errors.address}
              helperText={errors.address ? errors?.address.message : ""}
              {...register("address")}
            />
            <span className="flex flex-row gap-2 items-end">
              <CustomButton
                type={"primary"}
                content={"Save"}
                handleClick={handleSubmit(handleAddNewAddress)}
                sx={{ width: "100%" }}
              ></CustomButton>
              <CustomButton
                type={"secondary"}
                content={"Close"}
                sx={{ width: "100%" }}
                handleClick={handleCloseModal}
              ></CustomButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
