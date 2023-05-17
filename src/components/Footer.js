import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* {coloumn1} */}
          <div className="col1">
            <h4>ABOUT</h4>
            <ul className="list-unstyled">
              <li>519-766-5670</li>
              <li>Brar</li>
              <li>232 woodbine avenue</li>
            </ul>
          </div>
          {/* {coloumn2} */}
          <div className="col2">
            <h4>LANGUAGES</h4>
            <ul className="list-unstyled">
              <li>java</li>
              <li>python</li>
              <li>react</li>
            </ul>
          </div>
          {/* {coloumn3} */}
          <div className="col3">
            <h4>WORK</h4>
            <ul className="list-unstyled">
              <li>website</li>
              <li>layouts</li>
              <li>framworks</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row2">
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
