import * as yup from "yup";

export const loginScheme = yup.object().shape( {
  name: yup.string( "Name must be string !" ).required( "Please fill!" ),
  email: yup.string().email( "This field must be valid email!" ),
  password: yup.string()
  .min(3, "Password should be more than 3 characters" )
  .max(12, "Password should be less than 12 characters" ),
} );