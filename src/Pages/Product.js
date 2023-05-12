import React from "react";
import "./Product.css";
import Button from "../components/Button";

function Product() {
  return (
    <>
      <div className="p-two">
        Product Hero Section
        <Button />
      </div>
      <div className="p-three">
        Product Content Section
        <p className="p-para">
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

export default Product;
