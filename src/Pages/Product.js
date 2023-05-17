import React from "react";
import "./Product.css";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/ImageSliderData";

function Product() {
  return (
    <>
      <div className="p-two">
        <ImageSlider slides={SliderData} />
      </div>
      <div className="p-three">
        <div>
          <h1>Paragraph</h1>
          <p className="p-para">
            A basic webpage typically consists of a header with the website name
            and navigation menu, a content area that displays the main content,
            a sidebar for additional information or links, and a footer with
            important information.
          </p>
        </div>
        <div>
          <h2>List</h2>
          <ul className="p-text">
            <li>Nav bar</li>
            <li>Slider</li>
            <li>Header</li>
            <li>Footer</li>
            <li>Content Section</li>
          </ul>
        </div>
        <div>
          <h2>Table</h2>
          <table className="p-table">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Language</th>
            </tr>
            <tr>
              <td>Kiran</td>
              <td>Brar</td>
              <th>Python</th>
            </tr>
            <tr>
              <td>Bhupinder</td>
              <td>Dhillon</td>
              <th>React</th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Product;
