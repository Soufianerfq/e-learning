import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import courses from "../data/data";
import CourseCard from "../components/courseCard";
import { Link } from "react-router-dom";

const Library = function () {
  return (
    <>
      <header className="w-screen h-[10vh] pt-[20px]">
        <Header />
      </header>
      <section className="flex h-[90vh] w-[screen]">
        {courses.map((obj) => (
          <Link to={obj.id}>
            <div className="border-solid rounded-lg	shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)] w-[350px] h-[500px] m-4">
              <CourseCard {...obj} />
            </div>
          </Link>
        ))}
      </section>
      <footer className="w-screen h-[30vh]">
        <Footer />
      </footer>
    </>
  );
};

export default Library;
