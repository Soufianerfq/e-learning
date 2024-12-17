import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import courses from "../data/data";

const Library = function () {
  return (
    <>
      <header className="w-screen h-[10vh] pt-[20px]">
        <Header />
      </header>
      <section></section>
      <footer className="w-screen h-[30vh]">
        <Footer />
      </footer>
    </>
  );
};

export default Library;
