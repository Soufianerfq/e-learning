import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import CoursePage from "../pages/coursePage";
import Library from "../pages/library";

const Routers = function () {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="course/:id" element={<CoursePage />} />
      <Route path="library" element={<Library />} />
    </Routes>
  );
};

export default Routers;
