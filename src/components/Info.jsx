import React, { Component, useRef } from "react";
import InfoCard from "./InfoCard";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { People, Portrait, Timeline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  infoDiv: {
    padding: theme.spacing(2, 1, 1, 1),
    minHeight: "100vh",
  },

  iconStyle: {
    color: "#28A745",
    fontSize: "5rem",
  },

  titleTxtStyle: {
    fontWeight: "bold",
    fontSize: "3rem",
  },

  cardDiv: {
    paddingTop: theme.spacing(4),
  },
}));

const Info = () => {
  let classes = useStyles();

  const matchupsText =
    "Get stats of match-ups between bowlers and batsman, also see how a batsman or bowler performs with a non-striker, or how a bowler performs with a certain partnership";

  const playerText =
    "Get stats for a particular player, how they perform against particular teams, during certain overs, and their overall stats & records. You can also see player performaces with different umpires";

  const dataText =
    "Visualize data of matchups, players, teams, and matches in different forms - new graph types added regularly";

  return (
    <div className={classes.infoDiv}>
      <Typography align="center" className={classes.titleTxtStyle}>
        INFORMATION
      </Typography>
      <div className={classes.cardDiv}>
        <Grid container spacing={2}>
          <Grid align="center" item xs={4}>
            <InfoCard
              Title="MATCHUPS"
              Icon={<People className={classes.iconStyle} />}
              BodyTxt={matchupsText}
            />
          </Grid>
          <Grid align="center" item xs={4}>
            <InfoCard
              Title="PLAYER INFO"
              Icon={<Portrait className={classes.iconStyle} />}
              BodyTxt={playerText}
            />
          </Grid>
          <Grid align="center" item xs={4}>
            <InfoCard
              Title="VISUALIZE DATA"
              Icon={<Timeline className={classes.iconStyle} />}
              BodyTxt={dataText}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Info;
