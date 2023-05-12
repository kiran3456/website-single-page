import React from "react";
import "./Home.css";
import Button from "../components/Button";
import ImageSlider from "../components/ImageSlider";

function home() {
  return (
    <>
      <div className="c-two">
        Home Hero Section
        <Button />
      </div>
      <div className="c-three">Home Content Section</div>
    </>
  );
}

export default home;
