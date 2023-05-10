import React from "react";

const ProductNav = () => {
  return (
    <div className="h-52 w-full flex flex-col mb-5">
      <div className="h-1/3 w-full">
        <div className="h-full w-full bg-emerald-600 shadow-md"></div>
        <div className="h-full w-full ">
          <input
            style={{ top: "-2.5vh", left: "8.3%" }}
            className="relative w-5/6 m-auto border-4 rounded-full border-emerald-400 p-2 outline-none px-4"
            type="text"
          />{" "}
        </div>
      </div>
      <div className="h-2/3 w-5/6 m-auto flex "></div>
    </div>
  );
};

export default ProductNav;
