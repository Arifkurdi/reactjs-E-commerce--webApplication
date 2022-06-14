import React from "react";
import AfterRander from "../components/AfterRander";
import Catigories from "../components/Catigories";
import Companies from "../components/Companies";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Help from "../components/Help";
import News from "../components/News";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      {/* <Head /> */}
      <Slider />
      {/* <Cart /> */}
      <Help />
      <Features />
      <AfterRander />
      <Catigories />
      <Companies />
      <News />
      <Footer />
    <a href="https://github.com/Arifkurdi/reactjs-E-commerce--webApplication" className="btn btn-primary w-100">Go To Repos On GITHUB </a>
    </>
  );
};

export default Home;
