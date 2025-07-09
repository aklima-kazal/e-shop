import { string, object } from "yup";

export const contactSchema = object({
  name: string().required("Please enter your name"),
  phone: string().max(11).required("Please enter your phone number"),
  email: string()
    .email("invalid email")
    .required(" Please enter your name email"),
  message: string().required("Please enter your message"),
});
export const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
