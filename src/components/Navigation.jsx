import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="w-full flex" style={{ height: "8vh" }}>
      <div className="h-full fixed" style={{ width: "10%" }}>
        <img
          onClick={props.onOption}
          src="./assets/icons/menu.png"
          className="h-16 w-16 mt-2 bg-gray-300 rounded"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navigation;
