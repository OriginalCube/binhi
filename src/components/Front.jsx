import React from "react";
import { Link } from "react-router-dom";

const Front = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full flex bg-indigo-100 overflow-hidden">
        <div className="h-full w-2/3 relative flex flex-col top-48 pl-10">
          <div className="" style={{ width: "85%" }}>
            <p className="text-6xl font-bold leading-snug opacity-90 text-justify">
              Welcome to our website, where you can find a wide
              <span className="text-green-500"> variety of fresh </span>
              <span>and </span>
              <span className="text-green-500">
                delicious vegetables for sale.{" "}
              </span>
            </p>{" "}
          </div>
          <div className="">
            <Link to="products">
              <button
                className="m-auto mt-10 text-4xl font-semibold p-4 text-green-500 rounded-xl shadow-lg 
              hover:text-white hover:shadow-xl hover:bg-green-500 border-2 border-green-500"
              >
                Products
              </button>{" "}
            </Link>
          </div>
        </div>{" "}
        <div className="h-full w-1/3 ">
          <img
            src="./assets/images/vegtables.jpg"
            className="h-full w-full object-cover "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Front;
