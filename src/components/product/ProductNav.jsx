import React from "react";

const ProductNav = (props) => {
  return (
    <div className="h-52 w-full flex flex-col mb-5">
      <div className="h-1/3 w-full">
        <div className="h-full w-full bg-emerald-600 shadow-md"></div>
        <div className="h-full w-full ">
          <input
            style={{ top: "-2.5vh", left: "8.3%" }}
            className="relative w-5/6 m-auto border-4 rounded-full border-emerald-600 p-2 outline-none px-4 text-emerald-600"
            type="text"
          />{" "}
        </div>
      </div>
      <div className=" h-2/3 w-5/6 m-auto mt-10 flex text-emerald-600">
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(-1)}
            className="m-auto h-16 w-16 rounded p-2"
            src="./assets/icons/menu-bar.png"
            alt=""
          />
          <p className="text-center font-medium">Featured</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(-2)}
            className="m-auto h-16 w-16 p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Favorites</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(0)}
            className="m-auto h-16 w-16 rounded-full p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Fruits</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(1)}
            className="m-auto h-16 w-16 rounded-full p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Veggies</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(2)}
            className="m-auto h-16 w-16 rounded-full p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Grains</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(3)}
            className="m-auto h-16 w-16 rounded-full p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Roots Crops</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(4)}
            className="m-auto h-16 w-16 rounded-full p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Meats</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(5)}
            className="m-auto h-16 w-16 rounded-full p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Poultry</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(6)}
            className="m-auto h-16 w-16 rounded-full p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Dairy</p>
        </div>
        <div className="cursor-pointer h-full w-full">
          <img
            onClick={() => props.changeNav(7)}
            className="m-auto h-16 w-16 rounded-full p-2"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p className="text-center font-medium">Others</p>
        </div>
      </div>
      <div className="h-16 w-5/6 m-auto pt-2 flex">
        <p className="text-sm font-medium text-emerald-600">Sort by:</p>
      </div>
    </div>
  );
};

export default ProductNav;
