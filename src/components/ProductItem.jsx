import React from "react";

const ProductItem = (props) => {
  return (
    <div className="border-2 border-black h-80 w-56 p-2 mt-2 mb-2 rounded shadow-md">
      <div className="h-full w-full flex flex-col">
        <div className="h-5/6 border-b-2 border-black">
          <img src="" alt="" />
        </div>
        <div className="opacity-80 pl-4">
          <p className="font-lightbold text-2xl">{props.name}</p>
          <p className="font-lightbold text-xl text-green-500">
            $ {props.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
