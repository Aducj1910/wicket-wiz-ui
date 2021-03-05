import React, { Component } from "react";
import { Grid, Input, Typography } from "@material-ui/core";
import SearchAppBar from "../components/SearchAppBar";
import { makeStyles } from "@material-ui/styles";
import SimpleMenuStatsType from "../components/statsTypeChoice";

const useStyles = makeStyles((theme) => ({
  labelTxt: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  statsDiv: {
    padding: theme.spacing(1, 1, 1, 1),
  },
  titleTxt: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    paddingBottom: theme.spacing(3),
    fontSize: "2rem",
  },
  rowGrid: {
    paddingTop: theme.spacing(2),
  },
  inputGrid: {
    paddingLeft: theme.spacing(3),
  },
}));

const Stats = () => {
  let classes = useStyles();

  return (
    <div>
      <header>
        <SearchAppBar />
      </header>

      <div className={classes.statsDiv}>
        <Grid container>
          <Grid item xs={12}>
            <Typography align="center" className={classes.titleTxt}>
              Using CASE pre-alpha
            </Typography>
          </Grid>
          {/* new 
          row of data
          */}
          <Grid item container className={classes.rowGrid} xs={12}>
            <Grid item xs={1}>
              <Typography>Batsman: </Typography>
            </Grid>
            <Grid className={classes.inputGrid} item xs={2}>
              <Input className={classes.inputStyle} />
            </Grid>
          </Grid>
          {/* new 
          row of data
          */}
          <Grid item container className={classes.rowGrid} xs={12}>
            <Grid item xs={1}>
              <Typography>Bowler:</Typography>
            </Grid>
            <Grid className={classes.inputGrid} item xs={2}>
              <Input className={classes.inputStyle} />
            </Grid>
          </Grid>
          {/* new 
          row of data
          */}
          <Grid item container className={classes.rowGrid} xs={12}>
            <Grid item xs={1}>
              <Typography>Non-striker:</Typography>
            </Grid>
            <Grid className={classes.inputGrid} item xs={2}>
              <Input className={classes.inputStyle} />
            </Grid>
          </Grid>
          {/* new 
          row of data
          */}
          <Grid item container className={classes.rowGrid} xs={12}>
            <Grid item xs={1}>
              <Typography>Umpire:</Typography>
            </Grid>
            <Grid className={classes.inputGrid} item xs={2}>
              <Input className={classes.inputStyle} />
            </Grid>
          </Grid>
          {/* new 
          row of data
          */}
          <Grid item container className={classes.rowGrid} xs={12}>
            <Grid item xs={1}>
              <Typography>Venue:</Typography>
            </Grid>
            <Grid className={classes.inputGrid} item xs={2}>
              <Input className={classes.inputStyle} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Stats;
