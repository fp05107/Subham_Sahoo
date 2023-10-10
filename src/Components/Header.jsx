import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Box, Grid } from "@mui/material";
import React, { useState } from "react";
import theme from "../theme/theme";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [textHovered1, setTextHovered1] = useState(false);
  const [textHovered2, setTextHovered2] = useState(false);
  const [textHovered3, setTextHovered3] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        spacing={3}
        p={3}
        paddingX={20}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item>
          <img
            src="https://www.bni.com/wp-content/uploads/2020/05/BNI_logo_Red_refresh_RGB_final.png?x24229"
            // alt="image"
          />
        </Grid>
        <Grid
          item
          justifyContent={"center"}
          alignItems={"center"}
          width={"60%"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
          >
            <Box marginRight={10}>
              <Grid
                container
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
                padding={0}
              >
                <Grid item>
                  <FontAwesomeIcon
                    size={"xl"}
                    color={theme.palette.primary.main}
                    icon={faLinkedin}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon
                    size={"xl"}
                    color={theme.palette.primary.main}
                    icon={faFacebook}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon
                    size={"xl"}
                    color={theme.palette.primary.main}
                    icon={faSquareInstagram}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon
                    size={"xl"}
                    color={theme.palette.primary.main}
                    icon={faTwitter}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon
                    size={"xl"}
                    color={theme.palette.primary.main}
                    icon={faYoutube}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <text>
                In U.S.
                <span style={{ color: theme.palette.primary.main }}>
                  (800)-825-8286
                </span>{" "}
                | Outside U.S.
                <span style={{ color: theme.palette.primary.main }}>
                  support@bni.com
                </span>
              </text>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"85%"}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                width={"70%"}
                justifyContent={"space-around"}
              >
                <h3
                  style={{
                    color: textHovered1 ? theme.palette.primary.main : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setTextHovered1(true)}
                  onMouseLeave={() => setTextHovered1(false)}
                >
                  WHY BNI
                </h3>
                <h3>| </h3>
                <h3
                  style={{
                    color: textHovered2 ? theme.palette.primary.main : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setTextHovered2(true)}
                  onMouseLeave={() => setTextHovered2(false)}
                >
                  ABOUT US
                </h3>
                <h3>|</h3>
                <h3
                  style={{
                    color: textHovered3 ? theme.palette.primary.main : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setTextHovered3(true)}
                  onMouseLeave={() => setTextHovered3(false)}
                >
                  THE LATEST
                </h3>
              </Box>
              <Box>
                <div
                  style={{
                    backgroundColor: isHovered
                      ? "#FFF"
                      : theme.palette.primary.main,
                    borderRadius: "40px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    display: "flex",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid red",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <text
                    style={{
                      color: !isHovered ? "#FFF" : theme.palette.primary.main,
                      fontWeight: "bold",
                    }}
                  >
                    Find a Chapter
                  </text>
                </div>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
