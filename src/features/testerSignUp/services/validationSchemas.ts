import { object, string, number, date, InferType, ref } from "yup";

export const TesterSignUpValidationSchema = object({
  firstName: string().required("First name required"),
  lastName: string().required("Last name required"),
  email: string().email("Invalid email format").required("Email is required"),
  country: string()
    .required("Please select your country")
    .notOneOf(["Russian Federation", "Belarus", "Iran"], "Go fuck yourself"),
  password: string()
    .required("No password provided")
    .min(8, "Password should be at least 8 characters long"),
  confirmPassword: string()
    .min(1, "Please confirm your password")
    .oneOf([ref("password"), ""], "Passwords must match"),
});
