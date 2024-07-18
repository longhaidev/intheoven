import { TextField } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="p-[25px]"
    >
      <div className="p-[20px] flex flex-col items-center gap-3 bg-white rounded-sm">
        <h5 className="uppercase">reset your password</h5>
        <TextField
          className="w-full mb-1"
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <div
          className="w-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-center border border-gray-300 rounded-md"
          style={{ backgroundColor: "rgb(241, 218, 178)" }}
        >
          <button className="uppercase font-semibold">submit</button>
        </div>
        <div className="w-[80%] uppercase text-[12px] mt-2 text-center">
          <NavLink className="navlink-hover m-0" to="/login">
            back to login
          </NavLink>
        </div>
      </div>
    </div>
  );
}
