import React from "react";
import FormInputs from "./FormInputs";

const Login = (props) => {
  const [value, setValue] = React.useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      placeholder: "Username",
      type: "text",
      required: true,
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
      required: true,
    },
  ];

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange1 = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputsR = [
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
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitVal = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register bg-indigo-100">
      <div className="registerWrapper mt-16 border-2 border-gray-200 shadow-xl rounded-xl bg-white">
        <form onSubmit={submitVal}>
          <p className="registerText text-2xl font-semibold">Login Page</p>
          {inputs.map((input) => (
            <FormInputs
              key={input.id}
              {...input}
              value={value[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="text-yellow-500 rounded-xl shadow-xl text-xl w-2/3 mt-2 p-2 bg-white border-2 border-yellow-500 font-medium hover:text-white hover:bg-yellow-500">
            Login
          </button>
        </form>
      </div>
      <div
        className="registerWrapper mt-16 border-2 border-gray-200 shadow-xl rounded-xl bg-white"
        style={{ left: "55%" }}
      >
        <form onSubmit={submitVal}>
          <p className="registerText text-2xl font-semibold">Register Page</p>
          {inputsR.map((input, index) => (
            <FormInputs
              key={index}
              {...input}
              value={values[input.name]}
              onChange={onChange1}
            />
          ))}
          <button className="text-yellow-500 rounded-xl shadow-xl text-xl w-2/3 mt-2 p-2 bg-white border-2 border-yellow-500 font-medium hover:text-white hover:bg-yellow-500">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
