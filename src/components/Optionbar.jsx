import React from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Optionbar = (props) => {
  const [navigation, setNavigation] = React.useState(true);
  const [products, setProducts] = React.useState(true);

  const onNavigation = () => {
    setNavigation(!navigation);
  };

  const onProducts = () => {
    setProducts(!products);
  };

  return (
    <div
      className="fixed bg-lime-500 text-black flex flex-col z-50"
      style={{ height: "100vh", width: "15%" }}
    >
      <div className="w-full" style={{ height: "8%" }}>
        <div className="flex mt-2 ">
          <img
            onClick={props.onOption}
            className="h-24 w-1/2 m-auto p-3 rounded-xl opacity-80"
            src="./assets/images/Logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex flex-col mt-8 h-auto">
        <div className="w-5/6 mt-2 m-auto">
          <TextField
            id="outlined-basic"
            label="Search Bar"
            variant="outlined"
            color="success"
          />
        </div>
        <div className="mt-2 h-auto">
          <div className="w-full">
            <p
              onClick={onNavigation}
              className="text-3xl font-lightbold opacity-60 text-center"
            >
              Navigation
            </p>
          </div>
          {navigation ? (
            <div className="text-xl font-semibold flex flex-col opacity-80">
              <Link to="/">
                <div className="w-5/6 m-auto mt-2 flex">
                  <img
                    src="./assets/icons/home.png"
                    className="h-8 w-8 mr-3 opacity-80"
                    alt=""
                  />
                  <p>Home</p>{" "}
                </div>{" "}
              </Link>
              <Link to="login">
                <div className="w-5/6 m-auto mt-2 flex">
                  <img
                    src="./assets/icons/user.png"
                    className="h-8 w-8 mr-3 opacity-80"
                    alt=""
                  />
                  <p>Account</p>{" "}
                </div>{" "}
              </Link>
              <Link to="tracking">
                <div className="w-5/6 m-auto mt-2 flex">
                  <img
                    src="./assets/icons/delivery-truck.png"
                    className="h-8 w-8 mr-3 opacity-80"
                    alt=""
                  />
                  <p>Order Tracking</p>{" "}
                </div>{" "}
              </Link>
              <div className="w-5/6 m-auto mt-2 flex">
                <img
                  src="./assets/icons/about.png"
                  className="h-8 w-8 mr-3 opacity-80"
                  alt=""
                />
                <p>About Us</p>{" "}
              </div>
              <div className="w-5/6 m-auto mt-2 flex">
                <img
                  src="./assets/icons/question.png"
                  className="h-8 w-8 mr-3 opacity-80"
                  alt=""
                />
                <p>Help</p>{" "}
              </div>
            </div>
          ) : null}
        </div>
        <div className="w-full">
          <p
            onClick={onProducts}
            className="text-3xl font-lightbold opacity-60 text-center mt-2"
          >
            Products
          </p>
        </div>
        {products ? (
          <div className="text-xl font-semibold flex flex-col opacity-80">
            <Link to="products">
              <div className="w-5/6 m-auto mt-2 flex ">
                <img
                  src="./assets/icons/star.png"
                  className="h-8 w-8 mr-3 opacity-80"
                  alt=""
                />
                <p>Favorites</p>{" "}
              </div>{" "}
            </Link>
            <div className="w-5/6 m-auto mt-2 flex">
              <img
                src="./assets/icons/about.png"
                className="h-8 w-8 mr-3 opacity-80"
                alt=""
              />
              <p>Fruits</p>{" "}
            </div>
            <div className="w-5/6 m-auto mt-2 flex">
              <img
                src="./assets/icons/question.png"
                className="h-8 w-8 mr-3 opacity-80"
                alt=""
              />
              <p>Veggies</p>{" "}
            </div>
            <div className="w-5/6 m-auto mt-2 flex">
              <img
                src="./assets/icons/delivery-truck.png"
                className="h-8 w-8 mr-3 opacity-80"
                alt=""
              />
              <p>Favorites</p>{" "}
            </div>
            <div className="w-5/6 m-auto mt-2 flex">
              <img
                src="./assets/icons/about.png"
                className="h-8 w-8 mr-3 opacity-80"
                alt=""
              />
              <p>Fruits</p>{" "}
            </div>
            <div className="w-5/6 m-auto mt-2 flex">
              <img
                src="./assets/icons/question.png"
                className="h-8 w-8 mr-3 opacity-80"
                alt=""
              />
              <p>Veggies</p>{" "}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Optionbar;
