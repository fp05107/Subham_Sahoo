import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import "../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Text from "./Text";

const Footer = () => {
  return (
    <React.Fragment>
      <Box paddingY={10} paddingLeft={20} bgcolor={"#cf2030"}>
        <Grid container spacing={4}>
          <Grid item>
            <Box>
              <h3 className="footer-text">JOIN BNI</h3>
              <Stack spacing={1}>
                <div>
                  <text className="footer-text">Why BNI</text>
                </div>
                <div>
                  <text className="footer-text">What to expect?</text>
                </div>
                <div>
                  <text className="footer-text">Explore our markets</text>
                </div>
                <div>
                  <text className="footer-text">Our Stories</text>
                </div>
                <div>
                  <text className="footer-text">Start a BNI Chapter</text>
                </div>
                <div>
                  <text className="footer-text">Carres</text>
                </div>
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <h3 className="footer-text">ABOUT US</h3>
              <Stack spacing={1}>
                <div>
                  <text className="footer-text">About BNI</text>
                </div>
                <div>
                  <text className="footer-text">National Directors</text>
                </div>
                <div>
                  <text className="footer-text">Founder's Circle</text>
                </div>
                <div>
                  <text className="footer-text">Leadership</text>
                </div>
                <div>
                  <text className="footer-text">History</text>
                </div>
                <div>
                  <text className="footer-text">Foundation</text>
                </div>
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <h3 className="footer-text">THE LATEST</h3>
              <Stack spacing={1}>
                <div>
                  <text className="footer-text">Events</text>
                </div>
                <div>
                  <text className="footer-text">The Latest</text>
                </div>
                <div>
                  <text className="footer-text">Blog and News</text>
                </div>
                <div>
                  <text className="footer-text">Networking Tips</text>
                </div>
                <div>
                  <text className="footer-text">Media</text>
                </div>
                <div>
                  <text className="footer-text">Search</text>
                </div>
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <h3 className="footer-text">CONTACT US</h3>
              <Stack spacing={1}>
                <div>
                  <text className="footer-text">Contact Us</text>
                </div>
                <div>
                  <text className="footer-text">Find a Chapter?</text>
                </div>
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <h3 className="footer-text">MEMBERS</h3>
              <Stack spacing={1}>
                <div>
                  <text className="footer-text">BNI Conect</text>
                </div>
                <div>
                  <text className="footer-text">BNI Business Store</text>
                </div>
                <div>
                  <text className="footer-text">BNI US Store</text>
                </div>
                <div>
                  <text className="footer-text">BNI Brandshore</text>
                </div>
                <div>
                  <text className="footer-text">BNI Global Store</text>
                </div>
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Box
              textAlign={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box display={"flex"} flexDirection={"column"} m={5}>
                <text className="footer-text">
                  Subscribe to our newsletter for exclusive
                </text>
                <text className="footer-text">tips on</text>
                <text className="footer-text">
                  networking, public speaking and business.
                </text>
              </Box>
              <Box alignItems={"center"}>
                <input
                  placeholder="Email"
                  style={{
                    background: "#FFF",
                    borderRadius: "30px",
                    paddingLeft: "20px",
                    height: "50px",
                    marginBottom: "10px",
                  }}
                />
                <h3 className="footer-text">Connect</h3>
              </Box>
              <Grid
                container
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Grid item>
                  <FontAwesomeIcon
                    size={"2xl"}
                    color="#FFF"
                    icon={faLinkedin}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon
                    size={"2xl"}
                    color="#FFF"
                    icon={faFacebook}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon
                    size={"2xl"}
                    color="#FFF"
                    icon={faSquareInstagram}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon size={"2xl"} color="#FFF" icon={faTwitter} />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon size={"2xl"} color="#FFF" icon={faYoutube} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"20px"}
        paddingX={20}
      >
        <div>
          <text>© 2023 BNI Global, LLC</text>
        </div>
        <div>
          <Text text={"Cookie Policy"} />
          <text> | </text>
          <Text text={"Privacy Policy"} />
          <text> | </text>
          <Text text={"Terms and Conditions"} />
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
