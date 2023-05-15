import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-full flex ">
      <div className="relative w-5/6 h-5/6 m-auto pt-12 ">
        <div className="h-1/3 w-full">
          <img
            className="m-auto w-auto h-52"
            src="./assets/images/Logo-1.png"
            alt=""
          />
          <p className="text-center mt-4 text-4xl font-extralight w-2/3 m-auto">
            Fresh from the farm, straight to your table!
          </p>
        </div>
        <div className="h-1/3 w-full flex mt-12 ">
          <div className="w-full h-auto">
            <Link to="farmer">
              <p
                className="w-1/2 h-24 text-center text-4xl font-medium p-6 text-yellow-500 
            hover:cursor-pointer hover:bg-yellow-500 hover:text-indigo-100 m-auto border-2 border-yellow-500 rounded-xl shadow-xl"
              >
                Farmer's Hub
              </p>{" "}
            </Link>
          </div>
          <div className="w-full h-auto">
            <Link to="customer">
              <p
                className="w-1/2 h-24 text-center text-4xl font-medium p-6 text-yellow-500 
            hover:cursor-pointer hover:bg-yellow-500 hover:text-indigo-100 m-auto border-2 border-yellow-500 rounded-xl shadow-xl"
              >
                Customer's Hub
              </p>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
