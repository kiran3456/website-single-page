import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <div className="common-footer">Common Footer</div>
      </Router>
      <ImageSlider slides={SliderData} />;
    </>
  );
}

export default App;
