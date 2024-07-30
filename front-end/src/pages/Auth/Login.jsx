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
// validate
import * as Yup from "yup";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //onmount
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  // state
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState({});
  const [userLoginForm, setUserLoginForm] = useState({
    email: "",
    password: "",
  });
  const loginSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string()
      .min(8, "Password must at least 8 character")
      .required("Required"),
  });
  const handleOnChangeForm = async (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserLoginForm({
      ...userLoginForm,
      [name]: value,
    });
  };
  const postLogin = () => {
    navigate("/");
    dispatch(doLogin(userLoginForm));
  };
  const handleLogin = async () => {
    try {
      await loginSchema.validate(userLoginForm, { abortEarly: false });
      postLogin();
    } catch (error) {
      const newError = {};
      error?.inner?.forEach((err) => {
        newError[err.path] = err.message;
      });
      setErrMsg(newError);
    }
  };
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="p-[25px] pb-[16%] pt-[16%]"
    >
      <div className="p-[20px] flex flex-col items-center gap-3 bg-white shadow-md rounded-xl">
        <h5 className="uppercase">Login</h5>
        <TextField
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          error={errMsg.email ? true : false}
          helperText={`${errMsg.email ? errMsg.email : ""}`}
          onChange={handleOnChangeForm}
        />
        <span className="flex flex-row w-full relative">
          <TextField
            className="w-full mb-3"
            id="outlined-basic"
            size="small"
            label="Password"
            name="password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            error={errMsg.password ? true : false}
            helperText={`${errMsg.password ? errMsg.password : ""}`}
            onChange={handleOnChangeForm}
          />
          <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
            {!showPassword ? (
              <FaEye onClick={() => setShowPassword(true)} />
            ) : (
              <FaEyeSlash onClick={() => setShowPassword(false)} />
            )}
          </div>
        </span>
        <div
          onClick={() => handleLogin()}
          className="w-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-center border border-gray-300 rounded-xl"
          style={{ backgroundColor: "rgb(241, 218, 178)" }}
        >
          <button className="uppercase font-semibold">Login</button>
        </div>
        <div className="w-[80%] italic text-[16px] mt-2">
          <span className="flex flex-row justify-between">
            <NavLink
              className="navlink-hover m-0"
              to="/sign-up"
              style={{ "--line-hover": "rgb(241, 218, 178)" }}
            >
              Create account
            </NavLink>
            <p className="m-0">&#8226;</p>
            <NavLink
              className="navlink-hover m-0"
              to="/forgot"
              style={{ "--line-hover": "rgb(241, 218, 178)" }}
            >
              Forgot password
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
