import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Front from "./components/Front";
import Optionbar from "./components/Optionbar";
import Login from "./components/Login";

const Main = () => {
  const [option, setOption] = React.useState(false);
  const onOption = () => {
    setOption(!option);
  };
  return (
    <div className="h-auto w-sreen">
      {option ? <Optionbar onOption={onOption} /> : null}
      <Navigation onOption={onOption} />
      <Routes>
        <Route index element={<Front />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Main;
