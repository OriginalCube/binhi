import React from "react";
import ProductItem from "./ProductItem";
import ItemData from "../../ItemData.json";
import ProductNav from "./ProductNav";

const Products = () => {
  const [success, setSuccess] = React.useState(false);
  const [productId, setProductId] = React.useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const changeNav = (e) => {
    if (e >= 0) {
      productId.forEach((ev, index) =>
        index !== e ? (productId[index] = false) : (productId[index] = true)
      );
    } else if (e === -1) {
      productId.forEach((ev, index) => (productId[index] = true));
    } else if (e === -2) {
      productId.forEach((ev, index) =>
        index % 2 === 0 ? (productId[index] = false) : (productId[index] = true)
      );
    }
    setProductId([...productId]);
  };

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
        <div className="fixed mt-4 left-80 h-10 z-50 w-64 rounded-xl text-center border-2 border-lime-500 bg-lime-500">
          <p className="p-1 font-medium text-xl text-white">
            Added Successfully!
          </p>
        </div>
      ) : null}
      <ProductNav changeNav={changeNav} />
      <div className="h-auto w-full">
        {productId[0] ? (
          <div className="h-full w-full bg-indigo-100">
            <div className="h-auto bg-indigo-100 w-5/6 m-auto pb-10 flex flex-wrap justify-evenly">
              <p className="text-3xl p-2 text-yellow-500 border-b-2 border-yellow-500 w-full font-normal ml-4 mb-2">
                Fruits
              </p>
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
          </div>
        ) : null}
        {productId[1] ? (
          <div className="h-full w-full bg-indigo-100">
            <div className="h-auto bg-indigo-100 w-5/6 m-auto pb-10 flex flex-wrap justify-evenly">
              <p className="text-3xl p-2 text-yellow-500 border-b-2 border-yellow-500 w-full font-normal ml-4 mb-2">
                Veggies
              </p>
              {ItemData["Veggies"].map((e, index) => (
                <ProductItem
                  onSuccess={onSuccess}
                  key={index}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                />
              ))}
            </div>
          </div>
        ) : null}
        {productId[2] ? (
          <div className="h-full w-full bg-indigo-100">
            <div className="h-auto bg-indigo-100 w-5/6 m-auto pb-10 flex flex-wrap justify-evenly">
              <p className="text-3xl p-2 text-yellow-500 border-b-2 border-yellow-500 w-full font-normal ml-4 mb-2">
                Grains
              </p>
              {ItemData["Grains"].map((e, index) => (
                <ProductItem
                  onSuccess={onSuccess}
                  key={index}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                />
              ))}
            </div>{" "}
          </div>
        ) : null}
        {productId[3] ? (
          <div className="h-full w-full bg-indigo-100">
            <div className="h-auto bg-indigo-100 w-5/6 m-auto pb-10 flex flex-wrap justify-evenly">
              <p className="text-3xl p-2 text-yellow-500 border-b-2 border-yellow-500 w-full font-normal ml-4 mb-2">
                Root{" "}
              </p>
              {ItemData["Root"].map((e, index) => (
                <ProductItem
                  onSuccess={onSuccess}
                  key={index}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                />
              ))}
            </div>{" "}
          </div>
        ) : null}
        {productId[4] ? (
          <div className="h-full w-full bg-indigo-100">
            <div className="h-auto bg-indigo-100 w-5/6 m-auto pb-10 flex flex-wrap justify-evenly">
              <p className="text-3xl p-2 text-yellow-500 border-b-2 border-yellow-500 w-full font-normal ml-4 mb-2">
                Meats{" "}
              </p>
              {ItemData["Meats"].map((e, index) => (
                <ProductItem
                  onSuccess={onSuccess}
                  key={index}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                />
              ))}
            </div>{" "}
          </div>
        ) : null}
        {productId[5] ? (
          <div className="h-full w-full bg-indigo-100">
            <div className="h-auto bg-indigo-100 w-5/6 m-auto pb-10 flex flex-wrap justify-evenly">
              <p className="text-3xl p-2 text-yellow-500 border-b-2 border-yellow-500 w-full font-normal ml-4 mb-2">
                Poultry{" "}
              </p>
              {ItemData["Poultry"].map((e, index) => (
                <ProductItem
                  onSuccess={onSuccess}
                  key={index}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                />
              ))}
            </div>{" "}
          </div>
        ) : null}
        {productId[6] ? (
          <div className="h-full w-full bg-indigo-100">
            <div className="h-auto bg-indigo-100 w-5/6 m-auto pb-10 flex flex-wrap justify-evenly">
              <p className="text-3xl p-2 text-yellow-500 border-b-2 border-yellow-500 w-full font-normal ml-4 mb-2">
                Dairy{" "}
              </p>
              {ItemData["Dairy"].map((e, index) => (
                <ProductItem
                  onSuccess={onSuccess}
                  key={index}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                />
              ))}
            </div>{" "}
          </div>
        ) : null}
        {productId[7] ? (
          <div className="h-full w-full bg-indigo-100">
            <div className="h-auto bg-indigo-100 w-5/6 m-auto pb-10 flex flex-wrap justify-evenly">
              <p className="text-3xl p-2 text-yellow-500 border-b-2 border-yellow-500 w-full font-normal ml-4 mb-2">
                Others{" "}
              </p>
              {ItemData["Others"].map((e, index) => (
                <ProductItem
                  onSuccess={onSuccess}
                  key={index}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                />
              ))}
            </div>{" "}
          </div>
        ) : null}
      </div>{" "}
    </div>
  );
};

export default Products;
