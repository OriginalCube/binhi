import React from "react";

const ProductItem = (props) => {
  console.log(props.name);
  return (
    <div className="bg-white border-4 border-yellow-500 h-48 w-1/3 p-y-2 mt-2 mb-2 rounded-xl shadow-md overflow-hidden">
      <div className="h-full w-full flex flex-col">
        <div className="h-5/6 w-full">
          <img
            className="w-full h-full"
            src={"./assets/products/oshi-cover.gif"}
            alt=""
          />
        </div>
        <div className="h-1/6 w-full ">
          <p className="text-xl p-1 font-medium text-green-500">{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
