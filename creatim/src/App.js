import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Header from "./components/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ProductsFilter from "./components/pages/Products";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="products" element={<ProductsFilter />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
