import { TextField } from "@mui/material";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// components
import DefaultButton from "../../../components/Button/DefaultButton";
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      {" "}
      <div>
        <h3>Change Password</h3>
      </div>
      <hr></hr>
      <div>
        <div className="mb-4">
          <span className="flex flex-row w-full relative">
            <TextField
              sx={{ margin: "0px!important" }}
              className="w-full mb-3"
              id="outlined-basic"
              size="small"
              label="Current password"
              name="currentPassword"
              variant="outlined"
              type={showPassword ? "text" : "password"}
            />
            <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
              {!showPassword ? (
                <FaEye onClick={() => setShowPassword(true)} />
              ) : (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              )}
            </div>
          </span>
          <div className="w-[100%] italic text-[14px] mt-1 pr-1">
            <span className="flex flex-col items-end w-full">
              <NavLink
                className="navlink-hover m-0"
                to="/sign-up"
                style={{ "--line-hover": "rgb(241, 218, 178)" }}
              >
                Forgot your password?
              </NavLink>
            </span>
          </div>
        </div>
        <div id="change-password-form">
          <span className="flex flex-row w-full relative">
            <TextField
              className="w-full mb-3"
              id="outlined-basic"
              size="small"
              label="New password"
              name="newPassword"
              variant="outlined"
              type={showPassword ? "text" : "password"}
            />
            <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
              {!showPassword ? (
                <FaEye onClick={() => setShowPassword(true)} />
              ) : (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              )}
            </div>
          </span>
          <span className="flex flex-row w-full relative">
            <TextField
              className="w-full mb-3"
              id="outlined-basic"
              size="small"
              label="Confirm password"
              name="confirmPassword"
              variant="outlined"
              type={showPassword ? "text" : "password"}
            />
            <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
              {!showPassword ? (
                <FaEye onClick={() => setShowPassword(true)} />
              ) : (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              )}
            </div>
          </span>
        </div>
        <div className="flex flex-row gap-2 full">
          <DefaultButton
            content="Change password"
            styles={{ textTransform: "none" }}
            textColor="#fff"
          ></DefaultButton>
          <DefaultButton
            content="Cancel"
            primaryColor="#fff"
            secondaryColor="#ff6d00"
            styles={{ textTransform: "none", border: "1px solid #ff6d00" }}
            textColor="#ff6d00"
          ></DefaultButton>
        </div>
      </div>
    </div>
  );
}
