import React from "react";
import "./Home.css";
import Button from "../components/Button";
import ImageSlider from "../components/ImageSlider";

function home() {
  return (
    <>
      <div className="h-two">
        Home Hero Section
        <Button />
      </div>
      <div className="h-three">
        Home Content Section
        <p className="h-para">
          A basic webpage typically consists of a header with the website name
          and navigation menu, a content area that displays the main content, a
          sidebar for additional information or links, and a footer with
          important information. Links and images are also important elements
          that add functionality and visual appeal to a webpage. By combining
          these elements in a cohesive and user-friendly design, you can create
          a basic webpage that effectively communicates your message to your
          audience.
        </p>
      </div>
    </>
  );
}

export default home;
