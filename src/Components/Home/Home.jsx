import React from "react";
import "./home.css";
import { useData } from "../context/Context";
const Home = () => {
  const { handleOpen } = useData();
  return (
    <div className="home container border rounded mt-4 p-2">
      <div className="HomeCard">
        <h4 className="text-primary">Variations</h4>
        <p className="text-success">
          Add available options like color or size. Buyers will choose from
          these during checkout.
        </p>
        <button className="btn btn-outline-dark" onClick={handleOpen}>
          Add Variations
        </button>
      </div>
    </div>
  );
};
export default Home;
