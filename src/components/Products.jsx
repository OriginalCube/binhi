import React from "react";
import ProductItem from "./ProductItem";
import ItemData from "../ItemData.json";

const Products = () => {
  const [success, setSuccess] = React.useState(false);

  const onSuccess = () => {
    setSuccess(!success);
    if (!success) {
      setTimeout(() => {
        console.log("yep");
        setSuccess(false);
      }, 1000);
    }
  };
  return (
    <div className="h-screen w-full ">
      {success ? (
        <div className="fixed mt-4 left-80 h-10 w-64 rounded-xl text-center border-2 border-lime-500 bg-lime-500">
          <p className="p-1 font-medium text-xl text-white">
            Added Successfully!
          </p>
        </div>
      ) : null}
      <div className="h-auto w-full">
        <div className="h-auto w-full flex flex-wrap justify-evenly gap-3 bg-indigo-100">
          {ItemData["fruits"].map((e, index) => (
            <ProductItem
              onSuccess={onSuccess}
              key={index}
              name={e.name}
              price={e.price}
              image={e.image}
            />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default Products;
