import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import NetflixLandingPage from "../components/NetflixLandingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/landingPage" element={<NetflixLandingPage />} />
    </Routes>
  );
};

export default Router;
