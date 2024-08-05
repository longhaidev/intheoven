import * as Yup from "yup";

export const userLoginSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string()
    .min(8, "Password must at least 8 character")
    .required("Required"),
});

export const userSignUpSchema = Yup.object({
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

export const userForgotpasswordSchema = Yup.object({
  password: Yup.string()
    .required("Required")
    .min(8, "Password must at least 8 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Confirm password must match"
  ),
});

export const userForgotPasswordSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid email"),
});
