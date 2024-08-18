import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import Error from "./../pages/Errors";
import Header from "../Layouts/Header/Header";
import About from "../pages/Abouts";
import Footer from "../Layouts/Footer/Footer";
import Projects from "../pages/projects";
import Services from "../pages/Services";
import OurTech from "../pages/OurTech";
import Feedbacks from "../pages/Feedbacks";
const Index = () => {
  // set your conditional Route or Private Routes
  return (
    <BrowserRouter>
      {/* declare static Components here  Like Header Navbar etc */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/abouts" element={<OurTech />} />
        <Route path="/feedbacks" element={<Feedbacks />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
      {/* declare static Components here  Like Footer or Dropdown */}
    </BrowserRouter>
  );
};

export default Index;
