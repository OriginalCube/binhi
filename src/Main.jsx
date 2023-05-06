import React from "react";
import { Route, Routes } from "react-router-dom";
import Front from "./components/Front";
import Optionbar from "./components/Optionbar";
import Login from "./components/Login";
import Products from "./components/Products";

const Main = () => {
  const [option, setOption] = React.useState(false);
  const onOption = () => {
    setOption(!option);
  };
  return (
    <div className="h-auto w-sreen flex">
      <div className="h-full" style={{ width: "15vw" }}>
        <Optionbar onOption={onOption} />
      </div>
      <div style={{ width: "85vw" }}>
        <Routes>
          <Route index element={<Front />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
