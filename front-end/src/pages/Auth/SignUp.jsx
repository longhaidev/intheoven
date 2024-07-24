import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// UI & icon
import { TextField } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/login");
  };
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="p-[25px] pb-[16%] pt-[10%]"
    >
      <div className="p-[20px] flex flex-col items-center gap-3 bg-white rounded-sm">
        <h5 className="uppercase">Sign Up</h5>
        <TextField
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="User Name"
          variant="outlined"
        />
        <TextField
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <span className="flex flex-row w-full relative">
          <TextField
            className="w-full mb-3"
            id="outlined-basic"
            size="small"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            onChange={(event) => setPassword(event.target.value)}
          />
          {showPassword ? (
            <FaEye
              className="absolute right-[10px] top-[23.5%]"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaEyeSlash
              className="absolute right-[10px] top-[23.5%]"
              onClick={() => setShowPassword(true)}
            />
          )}
        </span>
        <div
          onClick={() => handleSignUp()}
          className="w-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-center border border-gray-300 rounded-md"
          style={{ backgroundColor: "rgb(241, 218, 178)" }}
        >
          <button className="uppercase font-semibold">Create</button>
        </div>
        <div className="w-[80%] uppercase text-[12px] mt-2 text-center">
          <NavLink className="navlink-hover m-0" to="/login">
            Have an account ?
          </NavLink>
        </div>
      </div>
    </div>
  );
}
