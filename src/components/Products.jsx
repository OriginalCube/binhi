import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const products = [
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
    { name: "Carrots", price: 1500 },
  ];
  return (
    <div className="h-auto w-full">
      <div className="h-auto w-full flex flex-wrap justify-evenly gap-3 bg-indigo-100">
        {products.map((e, index) => (
          <ProductItem key={index} name={e.name} price={e.price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
