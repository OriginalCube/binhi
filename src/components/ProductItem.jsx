import React from "react";

const ProductItem = (props) => {
  return (
    <div className="bg-white h-80 w-56 p-y-2 mt-2 mb-2 rounded-xl shadow-md">
      <div className="h-full w-full flex flex-col">
        <div className="h-5/6 w-full border-b-2 border-green-400">
          <img
            className="w-full h-full"
            src={"./assets/products/oshi-cover.gif"}
            alt=""
          />
        </div>
        <div className="opacity-80 pl-4 flex">
          <div className="h-full w-2/3 ">
            <p className="font-lightbold text-2xl">{props.name}</p>
            <p className="font-lightbold text-xl text-green-500">
              $ {props.price}
            </p>{" "}
          </div>
          <div className="h-full w-1/3">
            <img
              onClick={props.onSuccess}
              src="./assets/icons/shopping-cart.png"
              className="h-10 w-10 p-2 m-auto mt-2 bg-green-500 rounded-xl cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
