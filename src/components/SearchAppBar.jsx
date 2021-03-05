import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../resources/logo.png";
import { Button } from "@material-ui/core";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Translate } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "10vh",
  },

  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  itemStyle: {
    color: "white",
    opacity: 0.7,
    fontSize: "1rem",
    padding: theme.spacing(1, 1, 1, 1),
    "&:hover": {
      opacity: 1,
      fontWeight: "bold",
    },
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  const handleInput = () => {
    console.log(document.getElementById("searchBox").value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ paddingLeft: 1, paddingTop: 6 }}>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">
              <img src={logo} className={classes.logo} />
            </Link>
          </Typography>
          <Button component={Link} to={"/stats-engine"}>
            <Typography className={classes.itemStyle} variant="h6" noWrap>
              Stats Engine
            </Typography>
          </Button>
          <Button>
            <Typography className={classes.itemStyle} variant="h6" noWrap>
              About
            </Typography>
          </Button>
          <Button>
            <Typography className={classes.itemStyle} variant="h6" noWrap>
              Donate
            </Typography>
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              id="searchBox"
              placeholder="Search Players…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              // inputProps={{ "aria-label": "search" }}
              onChange={() => handleInput()}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
