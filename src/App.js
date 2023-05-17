import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="page-container">
        <div className="contant-wrap">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact={true} element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
