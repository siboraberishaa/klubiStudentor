import React from "react";
import About from "../components/About";
import Blog from "../components/Blog";
import Gallery from "../components/Gallery";
import Events from "../components/Events";

const HomeScreen = () => {
  return (
    <>
      <section className="section">
        <About />
      </section>
      <section className="section bg-gray">
        <Events />
      </section>
      <section className="section">
        <Blog />
      </section>
      <section className="ftco-gallery">
        <Gallery />
      </section>
    </>
  );
};

export default HomeScreen;
