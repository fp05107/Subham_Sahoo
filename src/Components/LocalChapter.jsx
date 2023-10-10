import { Box } from "@mui/material";
import React, { useState } from "react";
import theme from "../theme/theme";

const LocalChapter = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);
  return (
    <Box
      bgcolor={theme.palette.primary.main}
      marginY={3}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"50%"}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <h1 className="footer-text" style={{ fontSize: 38 }}>
            Find a Local Chapter
          </h1>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <text className="footer-text" style={{ textAlign: "center" }}>
            Experience our proven referral system in action. People just like
            you working together, helping each other grow their businesses and
            improve their business skills.
          </text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          m={5}
        >
          <div
            style={{
              borderRadius: "40px",
              backgroundColor: isTextHovered
                ? theme.palette.primary.main
                : "#FFF",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              padding: "10px",
              border: "2px solid #FFF",
            }}
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
          >
            <text
              style={{
                color: isTextHovered ? "#FFF" : "black",
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Find a Chapter
            </text>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default LocalChapter;
