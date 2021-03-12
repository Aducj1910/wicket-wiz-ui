import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { Component } from "react";

const useStyles = makeStyles((theme) => ({}));

const Footer = () => {
  let classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.bar}>
        <Grid container>
          <Grid item xs={5}></Grid>
          <Grid item xs={6}>
            <Typography>© Copyright 2021 - Red Coin Studio</Typography>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
