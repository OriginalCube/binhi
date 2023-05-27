import React from "react";
import { Route, Routes } from "react-router-dom";
import Front from "./components/Front";
import Optionbar from "./components/Optionbar";
import Login from "./components/accounts/Login";
import Products from "./components/product/Products";
import Tracking from "./components/Tracking";
import About from "./components/About";
import Farmer from "./components/accounts/Farmer";
import Contact from "./components/Contact";

const Main = () => {
  const [option, setOption] = React.useState(false);
  const onOption = () => {
    setOption(!option);
  };
  return (
    <div className="h-auto w-sreen flex">
      <div className="h-auto bg-lime-500" style={{ width: "15vw" }}>
        <Optionbar onOption={onOption} />
      </div>
      <div className="h-auto bg-indigo-100" style={{ width: "85vw" }}>
        <Routes>
          <Route index element={<Front />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="farmers" element={<Farmer />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
