import React from "react";

const ProductItem = (props) => {
  return (
    <div className="bg-white h-48 w-1/3 p-y-2 mt-2 mb-2 rounded-xl shadow-md overflow-hidden">
      <div className="h-full w-full flex flex-col shadow-inner shadow-white">
        <div className="h-full w-full">
          <img
            className="w-full h-full"
            src={"./assets/products/oshi-cover.gif"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
