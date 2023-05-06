import React from "react";
import TrackItem from "./TrackItem";

const Tracking = () => {
  const products = [
    { name: "Carrots", price: 1500, image: "./assets/products/oshi-cover-gif" },
    { name: "Carrots", price: 1500, image: "./assets/products/oshi-cover-gif" },
    { name: "Carrots", price: 1500, image: "./assets/products/oshi-cover-gif" },
    { name: "Carrots", price: 1500, image: "./assets/products/oshi-cover-gif" },
    { name: "Carrots", price: 1500, image: "./assets/products/oshi-cover-gif" },
  ];
  return (
    <div className="h-auto w-full">
      <div className="h-screen w-full flex">
        <div style={{ width: "85%" }} className=" h-full ">
          <div className="h-full flex flex-col m-auto" style={{ width: "95%" }}>
            <div className="h-1/6 w-full">
              <p className="mt-12 ml-5 text-7xl font-medium text-green-500">
                Cart
              </p>
            </div>
            <div className="w-full h-full">
              <div className="w-full h-auto m-auto border-t-2 border-green-500">
                {products.map((e, index) => (
                  <TrackItem
                    key={index}
                    name={e.name}
                    image={e.image}
                    price={e.price}
                  />
                ))}
              </div>
            </div>{" "}
          </div>
        </div>
        <div
          className="h-80 mt-36 mr-10 bg-white border-3 rounded-lg shadow-xl border-gray-300"
          style={{ width: "15%" }}
        >
          <div className="w-full h-full ">
            <div className="flex h-4/6 text-xl mt-4 flex-col w-5/6 m-auto ">
              <div className="flex ">
                <p className="w-full">Sale:</p>{" "}
                <p className="w-full text-right">$15000</p>
              </div>
              <div className="flex ">
                <p className="w-full">Sales Tax:</p>{" "}
                <p className="w-full text-right">$15</p>
              </div>
              <div className="flex ">
                <p className="w-full">Total:</p>{" "}
                <p className="w-full text-right">$15015</p>
              </div>
            </div>
            <div className="h-2/6 w-full ">
              <button className="w-5/6 h-2/3 m-auto ml-5 p-2 border-2 border-green-500 text-green-500 rounded-xl shadow-lg hover:bg-green-500 hover:text-white">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
