import React, { useState } from "react";
import "../Styles/Navbar.css";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../theme/theme";

export const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const handleMouseEnter = () => {
  //   setDropdownVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setDropdownVisible(false);
  // };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Box maxHeight={"70px"} paddingRight={20} paddingLeft={40}>
          <Toolbar>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <div
                style={{
                  background: !hovered ? "#FFF" : theme.palette.primary.main,
                  border: "1px solid #FFF",
                  borderRadius: "20px",
                  padding: "5px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Typography
                  style={{
                    color: hovered ? "#FFF" : theme.palette.primary.main,
                    fontWeight: "bold",
                  }}
                >
                  Global Convention 2023
                </Typography>
              </div>
              <div>
                <Typography>Carrers</Typography>
              </div>
              <div>
                <Typography>Franchising</Typography>
              </div>
              <div>
                <Typography>Contact Us</Typography>
              </div>
              <div>
                <Typography>Member Services</Typography>
              </div>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};
