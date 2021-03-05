import React, { Component, useEffect, useRef, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import landing from "../resources/landing.jpg";
import {
  CssBaseline,
  Grid,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Info from "../components/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${landing})`,
    backgroundSize: "cover",
  },
  colorStyle: {
    height: "100vh",
    backgroundColor: `rgba(46,46,46,0.8)`,
  },
  titleText: {
    fontFamily: "Nunito",
    color: "white",
    paddingTop: theme.spacing(8),
    fontWeight: "bold",
    fontSize: "3rem",
  },
  bodyText: {
    fontFamily: "Poppins",
    color: "white",
  },

  bodyText2: {
    fontFamily: "Poppins",
    color: "white",
    paddingTop: theme.spacing(2.5),
  },

  expandMore: {
    color: "white",
    fontSize: "2rem",
    "&:hover": {
      color: "#28A745",
    },
  },
}));

const LandingWallpaper = (props) => {
  let classes = useStyles();
  const { scrollToInfo } = props;

  const [trans, setTrans] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setTrans(true);
    }, 500);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.colorStyle}>
        <Collapse in={trans}>
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center" className={classes.titleText}>
                Introducing CASE
              </Typography>
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={6}>
              <Typography align="center" className={classes.bodyText}>
                Introducing CASE- the CricAnt Statistics Engine, it was made
                with the aim of providing an in-depth look into ball-by-ball
                cricket statistics for the fans.
              </Typography>
              <Typography align="center" className={classes.bodyText2}>
                <b>The tool is currently in pre-alpha testing mode</b> so you
                may experience glitches, innacuracies, etc., it may take a while
                to fix since I am a <b>sole developer</b> of the project. You
                can email glitches to historygenerator@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={3} />
            <Grid align="center" item xs={12}>
              <IconButton>
                <ExpandMore
                  onClick={() => scrollToInfo()}
                  className={classes.expandMore}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Collapse>

        <CssBaseline />
      </div>
      <div id="info">
        <Grid item xs={12}>
          <Info />
        </Grid>
      </div>
    </div>
  );
};

export default LandingWallpaper;
