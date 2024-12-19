import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import CoursePage from "../pages/coursePage";
import Library from "../pages/library";

const Routers = function () {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="courses">
        <Route index element={<Library />} />
        <Route path=":Title" element={<CoursePage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
