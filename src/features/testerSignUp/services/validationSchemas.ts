import { object, string, number, date, InferType } from "yup";

export const TesterSignUpValidationSchema = object({
  firstName: string().required("First name required"),
  lastName: string().required("Last name required"),
  email: string().email("Invalid email format").required("Email is required"),
  phoneNumber: string().required("Phone number required"),
});
