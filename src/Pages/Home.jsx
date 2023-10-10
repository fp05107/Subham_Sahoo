import React from "react";
import { Navbar } from "../Components/Navbar";
import Company from "../Components/Company";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LocalChapter from "../Components/LocalChapter";
import Slider from "../Components/Slider";

const Home = () => {
  const imageStyle = {
    maxWidth: "100%", // Set the maximum width to 100% of the div width
    maxHeight: "100%", // Set the maximum height to 100% of the div height
  };
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{ width: "100%" }}>
        <img src="/assets/upperimage.png" alt="image" style={imageStyle} />
      </div>
      <Company />
      <div style={{ width: "100%" }}>
        <img src="/assets/mid.png" alt="image" style={imageStyle} />
      </div>
      <Slider />
      <LocalChapter />
      <Footer />
    </div>
  );
};

export default Home;
