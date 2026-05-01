import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";


AOS.init({
  once: true,
  duration: 1000,
  offset: -200,
});


const Content = () =>{
  

  return (
<HashRouter>
  <div className="container">
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<ErrorPage />} />

    </Routes>
  </div>

  <Footer />
</HashRouter>

  );
}

export default Content;
