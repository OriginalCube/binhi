import React from "react";

const ProductItem = (props) => {
  const [random, setRandom] = React.useState(0);

  React.useEffect(() => {
    setRandom(Math.random() * 1 + 4);
  }, []);
  return (
    <div className="bg-white h-56 w-1/6 p-y-2 mt-2 mb-2 shadow-md rounded overflow-hidden">
      <div className="h-full w-full flex flex-col shadow-inner shadow-white">
        <div className="w-full h-2/3">
          <img
            className="w-full h-full"
            src={"./assets/products/oshi-cover.gif"}
            alt=""
          />{" "}
        </div>
        <div className="w-full h-1/3 p-1">
          <div className="p-1 w-full h-1/2 flex">
            <p className="w-1/2">{props.name}</p>
            <p className="w-1/2 text-right text-sm">
              Ratings : {random.toString().substring(0, 3)}/5
            </p>
          </div>
          <div className="w-full h-1/2 p-1 flex ">
            <div className="w-1/3">
              <p className="text-sm text-left pl-1 text-yellow-600">
                ₱{props.price}
              </p>
            </div>
            <div
              className="flex w-2/3 cursor-pointer"
              onClick={props.onSuccess}
            >
              <p className="pr-2 w-full text-right text-sm">Add to Cart</p>
              <img
                className="h-5 w-5 ml-auto"
                src="./assets/icons/shopping-cart.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
