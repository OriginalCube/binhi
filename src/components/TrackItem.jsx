import React from "react";

const TrackItem = (props) => {
  return (
    <div className="h-24 w-full flex mt-2 mb-2 shadow-md border-2 rounded bg-white border-gray-300">
      <div className="h-full w-36">
        <img
          className="h-full w-full"
          src="./assets/products/oshi-cover.gif"
          alt=""
        />
      </div>
      <div className="mt-2 ml-4">
        <p className="font-medium text-4xl">{props.name}</p>
        <p className="text-2xl text-yellow-500">$ {props.price}</p>
      </div>
    </div>
  );
};

export default TrackItem;
