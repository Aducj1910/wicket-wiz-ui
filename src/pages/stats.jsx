import React, { Component, useState } from "react";
import {
  Grid,
  Input,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import SearchAppBar from "../components/SearchAppBar";
import { makeStyles } from "@material-ui/styles";
import { Router } from "react-router-dom";
import PlayerSearch from "../components/playerSearchStats";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
    fontFamily: "Noto Sans JP",
    paddingTop: theme.spacing(3),
  },
  input: {
    minWidth: 200,
  },
}));

const Stats = () => {
  let classes = useStyles();
  const [indType, setIndType] = useState("bat");

  const indHandleChange = (event) => {
    setIndType(event.target.value);
  };

  if (indType == "bat") {
    return (
      <div>
        <header>
          <SearchAppBar />
        </header>

        <div className={classes.statsDiv}>
          <Grid container>
            <Grid item xs={4}>
              <Typography align="left" className={classes.titleTxt}>
                Using CASE pre-alpha:
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Stats for
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={indType}
                  onChange={indHandleChange}
                >
                  <MenuItem value={"bat"}>Batting</MenuItem>
                  <MenuItem value={"bowl"}>Bowling</MenuItem>
                  <MenuItem value={"field"}>Fielding</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  if (indType == "bowl") {
    return (
      <div>
        <header>
          <SearchAppBar />
        </header>

        <div className={classes.statsDiv}>
          <Grid container>
            <Grid item xs={4}>
              <Typography align="left" className={classes.titleTxt}>
                Using CASE pre-alpha:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Stats for
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={indType}
                  onChange={indHandleChange}
                >
                  <MenuItem value={"bat"}>Batting</MenuItem>
                  <MenuItem value={"bowl"}>Bowling</MenuItem>
                  <MenuItem value={"field"}>Fielding</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* new 
            row */}
            <Grid className={classes.rowGrid} item xs={12} container>
              <Grid item xs={3} md={1}>
                <Typography className={classes.label}>Batsman:</Typography>
              </Grid>
              <Grid item xs={3}>
                <PlayerSearch lbl="Batsman" />
              </Grid>
            </Grid>
            {/* new 
            row */}
            <Grid className={classes.rowGrid} item xs={12} container>
              <Grid item xs={3} md={1}>
                <Typography className={classes.label}>Venue:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Input className={classes.input} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
};

export default Stats;
