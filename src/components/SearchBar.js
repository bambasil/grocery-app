import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { red } from "@mui/material/colors";

const TempStylyedComp = styled("div")(function () {
  return {
    color: "red",
    border: "2px solid red",
    backgroundColor: "yellow",
  };
});

// const ParagraphStyleComp = styled("p")(function () {
//   return {
//     color: 'pink',
//   };
// });

// const ArrowPara = styled('p')(() => ({}))

const val = 0;
const t = () => val;
// const s = () => {
//     const val = 0
//    return val;
// }
// console.log(s())

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  //   pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  ".MuiInputBase-input": {
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

const BoxStyled = styled(Box)(() => ({
  marginBottom: "20px",
  marginTop: "50px",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  borderRadius: "15px",
  background: "white",
}));

function SearchAppBar() {
  return (
    <BoxStyled>
      <StyledToolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </StyledToolbar>
    </BoxStyled>
  );
}

export default SearchAppBar;
