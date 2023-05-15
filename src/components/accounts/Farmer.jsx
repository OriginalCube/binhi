import React from "react";
import FormComponents from "./FormComponents";

const Farmer = () => {
  const [mode, setMode] = React.useState(true);

  const [values, setValues] = React.useState({
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

  const [value, setValue] = React.useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const check = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      error: "fullname should not include any special character!",
      label: "Fullname",
      pattern: "{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      error:
        "Username should be 3-16 characters and should not include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      error: "The given email is not valid!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      error: "Address should be 3-16 characters!",
      label: "Address",
      pattern: "{3,16}$",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      error:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      error: "The password given does not match",
      pattern: value.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeLogin = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen w-full">
      <img
        src="./assets/images/bg-pattern.png"
        className=" h-full absolute opacity-75"
        style={{ width: "85vw" }}
        alt=""
      />
      <div className="register border-2 ">
        <div className="registerWrapper bg-white rounded-xl border-2 border-emerald-500 shadow-xl">
          {mode ? (
            <form onSubmit={handleSubmit}>
              <p className="text-5xl text-center font-light py-4">
                Register Form
              </p>
              {check.map((check) => (
                <FormComponents
                  pattern={check.pattern}
                  placeholder={" "}
                  key={check.id}
                  {...check}
                  value={value[check.name]}
                  onChange={onChange}
                />
              ))}
              <p className="mt-2">
                Already have account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setMode(false)}
                >
                  Login
                </span>
              </p>
              <button
                className="mt-2 p-3 w-5/6 border-2 border-yellow-500 rounded text-yellow-500 
              hover:bg-yellow-500 hover:text-white bg-500"
              >
                Submit
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-5xl text-center font-light py-4">Login Form</p>
              {inputs.map((check) => (
                <FormComponents
                  pattern={check.pattern}
                  placeholder={" "}
                  key={check.id}
                  {...check}
                  value={value[check.name]}
                  onChange={onChangeLogin}
                />
              ))}
              <p className="mt-2">
                Don't have account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setMode(true)}
                >
                  Register
                </span>
              </p>
              <button className="mt-2 p-3 w-5/6 border-2 border-yellow-500 rounded text-yellow-500 bg-white hover:bg-yellow-500 hover:text-white">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <div
        className="h-4/6 relative w-1/2 flex flex-col"
        style={{ top: "16.6%" }}
      >
        <div className="h-1/2  w-full">
          <img
            className="w-auto h-full pt-10 m-auto opacity-70"
            src="./assets/images/Logo-1.png"
            alt=""
          />{" "}
        </div>
        <div className="h-1/2 w-full">
          <p className="pt-10 text-3xl font-medium text-center w-full">
            Fresh from the farm, <br />
            straight to your table!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Farmer;
