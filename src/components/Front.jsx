import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Front = () => {
  return (
    <div className="h-auto w-full">
      <div className="h-screen flex relative">
        <div className="h-full w-2/3 relative flex flex-col pl-10 ">
          <div className="mt-60" style={{ width: "85%" }}>
            <p className="text-6xl font-bold leading-snug opacity-90 text-justify">
              Welcome to our website, where you can find a wide
              <span className="text-yellow-500"> variety of fresh </span>
              <span>and </span>
              <span className="text-yellow-500">
                delicious vegetables for sale.{" "}
              </span>
            </p>{" "}
          </div>
          <div className="">
            <Link to="products">
              <button
                className="m-auto mt-10 text-4xl p-4 text-yellow-500 rounded-xl shadow-lg 
              hover:text-white hover:shadow-xl hover:bg-yellow-500 border-2 border-yellow-500"
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
