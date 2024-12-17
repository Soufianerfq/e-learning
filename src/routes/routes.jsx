import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import CoursePage from "../pages/coursePage";
import Library from "../pages/library";

const Routers = function () {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="courses/:Title" element={<CoursePage />}>
        <Route path=":Part" element={<CoursePage />} />
      </Route>
      <Route path="courses" element={<Library />} />
    </Routes>
  );
};

export default Routers;
