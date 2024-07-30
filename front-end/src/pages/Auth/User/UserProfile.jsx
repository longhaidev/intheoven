import React from "react";
// UI & image
import blankImg from "../../../assets/Pictures/blank-img-user1.png";
import { TextField, Menu, MenuItem } from "@mui/material";
// components
import DefaultButton from "../../../components/Button/DefaultButton";
import UserMenu from "../../../components/UserMenu/UserMenu";
export default function UserProfile() {
  return (
    <div className="">
      <div>
        <h3>My profile</h3>
        <p>Manage your profile infomation to protect your account</p>
      </div>
      <hr></hr>
      <div className="w-full flex flex-col justify-center items-center p-[14px]">
        <div className="w-[90px] h-[90px] mb-[10px]">
          <img className="w-full h-full object-cover" src={blankImg}></img>
        </div>
        <DefaultButton
          content="Choose new avatar"
          styles={{ width: "fit-content", border: "none" }}
          primaryColor="#3f3f4666"
          secondaryColor="#3f3f4666"
          textColor="#fff"
          textColorOnHover="#fff"
        ></DefaultButton>
      </div>
      <hr></hr>
      <div>
        <div className="p-[14px]">
          <TextField
            className="w-full mb-3"
            size="small"
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
          />
          <TextField
            className="w-full mb-3"
            size="small"
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
          />
          <TextField
            className="w-full mb-3"
            size="small"
            id="outlined-basic"
            label="Phone"
            name="phone"
            variant="outlined"
          />
          <TextField
            className="w-full mb-3"
            size="small"
            id="outlined-basic"
            label="Full Address"
            name="address"
            variant="outlined"
          />
        </div>
      </div>
      <DefaultButton
        content="Save"
        styles={{ width: "100%" }}
        primaryColor="#ff6d00"
        secondaryColor="#ff6d00"
        textColor="#fff"
        textColorOnHover="#fff"
      ></DefaultButton>
    </div>
  );
}
