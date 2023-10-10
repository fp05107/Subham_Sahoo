import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const items = [
    {
      image:
        "https://www.bni.com/wp-content/uploads/2021/10/Ejercito.png?x24229",
      review:
        "Joining BNI was a life-changing decision. Learning how to market my business through weekly presentations and feature presentations has opened my eyes to the possibilities of networking. More than anything, I have enjoyed building a network of professionals that I am confident referring business to, as each has made the same commitment I have to our code of ethic. I am now a go-to person, and it feeds my soul to send business to fellow members. A third of my own customers are a direct result of BNI.",
      name: "- Sue Todd ",
      productType: "Skin Care ",
      country: "USA",
    },
    {
      image: "https://www.bni.com/wp-content/uploads/2021/10/Boyle.png?x24229",
      review:
        "It’s a no brainer for business owners who want to grow personally and professionally. The structure, accountability and systems are proven. BNI doesn’t need selling, it just needs experiencing and the rest takes care of itself when you fully adopt a givers gain mindset.",
      name: "- Bronwyn Boyle ",
      productType: "Business Consulting ",
      country: "Australia",
    },
  ];
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(items[index]);
  const handleRightClick = () => {
    console.log("Right click..........");
    if (index >= items.length - 1) {
      setIndex(0);
      // setItem(items[index]);
    } else {
      setIndex((prev) => prev + 1);
      // setItem(items[index]);
    }
  };
  const handleLeftClick = () => {
    console.log("Left Click......");
    if (index === 0) {
      setIndex(items.length - 1);
      // setItem(items[index]);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  useEffect(() => {
    setItem(items[index]);
  }, [index]);
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"70%"}
      >
        <Box onClick={handleLeftClick} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon size={"xl"} icon={faArrowLeft} />
        </Box>
        <Box
          width={"85%"}
          // border={"1px solid blue"}
          m={3}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box borderRadius={10} width={"25%"}>
            <img
              style={{ width: "80%", height: "80%" }}
              src={item?.image}
              // alt="image"
            />
          </Box>
          <Box
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            padding={5}
            width={"75%"}
          >
            <Box>
              <text>{item?.review}</text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              mt={2}
            >
              <text style={{ fontWeight: "bold", marginRight: "5px" }}>
                {item?.name}
              </text>
              <text
                style={{
                  marginRight: "5px",
                  color: "#9fa2a6",
                  fontWeight: "bold",
                }}
              >
                {" "}
                |{" "}
              </text>
              <text
                style={{
                  fontWeight: "bold",
                  marginRight: "5px",
                  color: "#9fa2a6",
                }}
              >
                {item?.productType}
              </text>
              <text
                style={{
                  marginRight: "5px",
                  color: "#9fa2a6",
                  fontWeight: "bold",
                }}
              >
                {" "}
                |{" "}
              </text>
              <text
                style={{
                  fontWeight: "bold",
                  marginRight: "5px",
                  color: "#9fa2a6",
                }}
              >
                {item?.country}
              </text>
            </Box>
          </Box>
        </Box>
        <Box onClick={handleRightClick} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon size={"xl"} icon={faArrowRight} />
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
