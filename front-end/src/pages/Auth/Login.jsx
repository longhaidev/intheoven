import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// UI
import { TextField } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// redux
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/userSlice";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(">>> check email: ", email, " >>> check password: ", password);
    dispatch(doLogin(email, password));
    navigate("/");
  };
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="p-[25px] pb-[16%] pt-[16%]"
    >
      <div className="p-[20px] flex flex-col items-center gap-3 bg-white rounded-sm">
        <h5 className="uppercase">Login</h5>
        <TextField
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(event) => setEmail(event.target.value)}
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
          onClick={() => handleLogin()}
          className="w-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-center border border-gray-300 rounded-md"
          style={{ backgroundColor: "rgb(241, 218, 178)" }}
        >
          <button className="uppercase font-semibold">Login</button>
        </div>
        <div className="w-[80%] uppercase text-[12px] mt-2">
          <span className="flex flex-row justify-between">
            <NavLink className="navlink-hover m-0" to="/sign-up">
              Create account
            </NavLink>
            <p className="m-0">&#8226;</p>
            <NavLink className="navlink-hover m-0" to="/forgot">
              forgot password
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
