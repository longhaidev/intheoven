import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// UI & image
import blankImg from "assets/Pictures/blank-img-user1.png";
import { TextField, Menu, MenuItem } from "@mui/material";
// components
import DefaultButton from "components/Button/DefaultButton";
import CustomButton from "components/Button/CustomButton";
// validate
import { yupResolver } from "@hookform/resolvers/yup";
import { userEditProfileFormSchema } from "utils/Validators/validateSchema";
export default function UserProfile() {
  // fetch user profile...
  const [isEdit, setIsEdit] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "",
    phone: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userEditProfileFormSchema),
  });
  const handleFetchUserProfile = () => {
    // call api
  };
  const handleUpdateProfile = (data) => {
    console.log(data);
    setIsEdit(false);
  };
  // didmount
  useEffect(() => {
    handleFetchUserProfile();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-[14px] border border-gray-300 rounded-md">
      <div>
        <h3 className="font-section-sub-heading">My Profile</h3>
        <p className="font-text-primary">
          Manage your profile infomation to protect your account
        </p>
      </div>
      <hr></hr>
      <div className="lg:flex lg:flex-row-reverse lg:p-8">
        <div className="w-full flex flex-col justify-center items-center p-[14px] lg:justify-start">
          <div className="w-[90px] h-[90px] mb-[10px]">
            <img className="w-full h-full object-cover" src={blankImg}></img>
          </div>
          <DefaultButton
            content="Choose new avatar"
            styles={{ width: "fit-content", border: "none", fontSize: "16px" }}
            primaryColor="#3f3f4666"
            secondaryColor="#3f3f4666"
            textColor="#fff"
            textColorOnHover="#fff"
          ></DefaultButton>
        </div>
        <hr className="lg:hidden"></hr>
        <div id="form_wrap">
          <div className="p-[14px] lg:p-0">
            <TextField
              disabled
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              name="email"
              value="Current User email"
              variant="outlined"
            />
            <TextField
              disabled={!isEdit}
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name ? errors?.name.message : ""}
              {...register("name")}
            />

            <TextField
              disabled={!isEdit}
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="Phone"
              name="phone"
              variant="outlined"
              error={!!errors.phone}
              helperText={errors.phone ? errors?.phone.message : ""}
              {...register("phone")}
            />
          </div>
          <div className="lg:w-full lg:items-center lg:flex lg:flex-row lg:justify-center">
            {isEdit ? (
              <CustomButton
                content={"Save"}
                type={"secondary"}
                handleClick={handleSubmit(handleUpdateProfile)}
                sx={{ width: "100%" }}
              ></CustomButton>
            ) : (
              <CustomButton
                content={"Edit"}
                type={"secondary"}
                sx={{
                  "&:hover": {
                    backgroundColor: "#cae1fd",
                    color: "#006fee",
                    border: "solid 1px #006fee",
                  },
                  color: "#006fee",
                  border: "solid 1px #006fee",
                  width: "100%",
                }}
                handleClick={() => setIsEdit(true)}
              ></CustomButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
