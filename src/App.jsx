import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import TestProducts from './pages/TestProducts';

function App() {
  return (
    <div className="overflow-x-hidden bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/singleProduct/:id" element={<SingleProductPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/categories" element={<TestProducts />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
