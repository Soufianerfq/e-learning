import React from "react";
import TopRate from "../components/topRated";
import Header from "../components/header";
import PricingPannelSection from "../components/pricingPannelSection";
import Footer from "../components/footer";
import LP from "../components/LP";

const Home = function () {
  return (
    <div>
      <header className="w-screen">
        <Header />
      </header>
      <main className="w-screen h-[90vh]">
        <LP />
      </main>
      <section>
        <TopRate />
      </section>
      <section>
        <PricingPannelSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
