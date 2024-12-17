import React from "react";
import TopRate from "../components/topRated";
import Header from "../components/header";
import PricingPannelSection from "../components/pricingPannelSection";
import Footer from "../components/footer";
import LP from "../components/LP";

const Home = function () {
  return (
    <>
      <header className="w-screen h-[10vh] pt-[20px]">
        <Header />
      </header>
      <main className="w-screen h-[100vh]">
        <LP />
      </main>
      <section className="w-screen h-[100vh]">
        <TopRate />
      </section>
      <section className="w-screen h-[100vh]">
        <PricingPannelSection />
      </section>
      <footer className="w-screen h-[30vh]">
        <Footer />
      </footer>
    </>
  );
};
export default Home;
