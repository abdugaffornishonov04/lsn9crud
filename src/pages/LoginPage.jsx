import { Fragment } from "react";
// import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginScheme } from "../schemas/loginScheme";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { ToastContainer } from "react-bootstrap";

  import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
  const navigate = useNavigate();

   const formik = useFormik({
     initialValues: {
       name: "",
       email: "",
       password: "",
     },

     validationSchema: loginScheme,

     onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);

       console.log(values);

       navigate("/")
      },
    });

    console.log(formik.errors);


  return (
    <Fragment>
      <ToastContainer />
      <div className="login-page">
        <div className="login-page-wrapper">
          <h1>Login Page</h1>
          <form className="login-page-form">
            <div className="form-group mb-3">
              <label htmlFor="name">Full Name</label>
              <input
                value={formik.values.name}
                onChange={formik.handleChange}
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                id="email"
                name="email"
                className="form-control"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="age">Password</label>
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                id="password"
                name="password"
                className="form-control"
              />
            </div>

            <button
              className="login-submit-btn"
              type="submit"
              onClick={formik.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginPage

// i think code is over