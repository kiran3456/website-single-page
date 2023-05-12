import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* {coloumn1} */}
          <div className="col">
            <h4>Company name</h4>
            <ul className="list-unstyled">
              <li>519-766-5670</li>
              <li>Brar</li>
              <li>232 woodbine avenue</li>
            </ul>
          </div>
          {/* {coloumn2} */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>bad stuff</li>
              <li>good stuff</li>
              <li>other stuff</li>
            </ul>
          </div>
          {/* {coloumn3} */}
          <div className="col">
            <h4>work</h4>
            <ul className="list-unstyled">
              <li>bad work </li>
              <li>good work</li>
              <li>other work</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()}THICC MEMES INC|All right
            reserved|Terms of Service|Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
