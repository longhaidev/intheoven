import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// UI & icon
import { TextField } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// validation
import * as Yup from "yup";
export default function SignUp() {
  const navigate = useNavigate();
  // state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errMsg, setErrMsg] = useState({});
  const [userRegisterForm, setUserRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const registerSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password must at least 8 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Confirm password must match"
    ),
  });
  const handleOnChangeForm = (event) => {
    const { name, value } = event.target;
    setUserRegisterForm({
      ...userRegisterForm,
      [name]: value,
    });
  };
  const handleSignUp = async () => {
    try {
      await registerSchema.validate(userRegisterForm, { abortEarly: false });
      navigate("/login");
    } catch (error) {
      const newErr = {};
      error.inner.forEach((err) => {
        newErr[err.path] = err.message;
      });
      setErrMsg(newErr);
    }
  };
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="p-[25px] pb-[16%] pt-[10%]"
    >
      <div className="p-[20px] flex flex-col items-center gap-3 bg-white shadow-md  rounded-xl">
        <h5 className="uppercase">Sign Up</h5>
        <TextField
          error={errMsg.name ? true : false}
          helperText={`${errMsg.name ? errMsg.name : ""}`}
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          name="name"
          onChange={handleOnChangeForm}
        />
        <TextField
          error={errMsg.email ? true : false}
          helperText={`${errMsg.email ? errMsg.email : ""}`}
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleOnChangeForm}
        />
        <span className="flex flex-row w-full relative">
          <TextField
            error={errMsg.password ? true : false}
            helperText={`${errMsg.password ? errMsg.password : ""}`}
            className="w-full mb-3"
            id="outlined-basic"
            size="small"
            label="Password"
            variant="outlined"
            name="password"
            type={showPassword ? "text" : "password"}
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
        <span className="flex flex-row w-full relative">
          <TextField
            error={errMsg.confirmPassword ? true : false}
            helperText={`${
              errMsg.confirmPassword ? errMsg.confirmPassword : ""
            }`}
            className="w-full mb-3"
            id="outlined-basic"
            size="small"
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            onChange={handleOnChangeForm}
          />
          <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
            {!showConfirmPassword ? (
              <FaEye onClick={() => setShowConfirmPassword(true)} />
            ) : (
              <FaEyeSlash onClick={() => setShowConfirmPassword(false)} />
            )}
          </div>
        </span>
        <div
          onClick={() => handleSignUp()}
          className="w-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-center border border-gray-300 rounded-xl"
          style={{ backgroundColor: "rgb(241, 218, 178)" }}
        >
          <button className="uppercase font-semibold">Create</button>
        </div>
        <div className="w-[80%] mt-2 text-center">
          <NavLink
            className="navlink-hover m-0 italic text-[16px]"
            to="/login"
            style={{ "--line-hover": "rgb(241, 218, 178)" }}
          >
            Have an account ?
          </NavLink>
        </div>
      </div>
    </div>
  );
}
