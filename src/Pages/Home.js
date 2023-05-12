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
        <h1>Paragraph</h1>
        <p className="h-para">
          A basic webpage typically consists of a header with the website name
          and navigation menu, a content area that displays the main content, a
          sidebar for additional information or links, and a footer with
          important information.
        </p>
        <h2>List</h2>
        <ul className="h-text">
          <li>Nav bar</li>
          <li>Slider</li>
          <li>Header</li>
          <li>Footer</li>
          <li>Content Section</li>
        </ul>
        <h2>Add a table:</h2>
        <table className="h-table">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>Kiran</td>
            <td>Brar</td>
            <th>$100</th>
          </tr>
          <tr>
            <td>Bhupinder</td>
            <td>Dhillon</td>
            <th>$150</th>
          </tr>
        </table>
      </div>
    </>
  );
}

export default home;
