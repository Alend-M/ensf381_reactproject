import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./Header";
import "./Header.css";
import HomeMainSection from "./HomeMainSection";
import Productpage from "./Productpage";
import ProductList from "./ProductList";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <BrowserRouter>
            <div className="homepage">
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomeMainSection />} />
                    <Route exact path="/Productpage" element={<Productpage />} />
                    <Route exact path="/products" element={<ProductList />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};


export default Homepage;
