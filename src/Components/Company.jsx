import React, { useState } from "react";
import "../Styles/Company.css";

const Company = () => {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    {
      src: "https://www.bni.com/wp-content/uploads/2020/06/forbes.png?x24229",
      alt: "Forbes",
    },
    {
      src: "https://www.bni.com/wp-content/uploads/2020/06/Yahoo-FInance.png?x24229",
      alt: "Yahoo Finance",
    },
    {
      src: "https://www.bni.com/wp-content/uploads/2020/06/entrepreneur.png?x24229",
      alt: "Entrepreneur",
    },
  ];

  const handleImageClick = (index) => {
    setActiveImage(index);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: '20px'
      }}
    >
      <div className="companybox">
        {images.map((image, index) => (
          <div>
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onMouseEnter={() => handleImageClick(index)}
              className={activeImage === index ? "active" : "inactive"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
