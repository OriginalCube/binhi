import React from "react";
import { Link, Outlet } from "react-router-dom";
import FormInputs from "./FormInputs";
import axios from "axios";

const Register = () => {
  const [valid, setValid] = React.useState(false);
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    axios.post("accounts/add", {
      username: values.username,
      password: values.password,
      type: "customer",
    });
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <form onSubmit={sendData}>
          <p className="registerText">Create an Account</p>
          {valid ? (
            <span style={{ color: "green" }}>
              Account Created Successfully!
            </span>
          ) : null}
          {inputs.map((input, index) => (
            <FormInputs
              key={index}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <p>
            If you have an account already please{" "}
            <Link to="/login"> login.</Link>
          </p>
          <Outlet />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
