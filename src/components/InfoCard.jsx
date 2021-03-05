import { Card, CardContent, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import { shadows } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "60vh",
    width: "25vw",
    borderRadius: "2rem",
    "&:hover": {
      boxShadow: "0 3px 10px 5px rgba(40, 167, 69, .3)",
      cursor: "pointer",
    },
  },

  titleStyle: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.6rem",
  },

  bodyTxtStyle: {
    paddingTop: theme.spacing(2),
  },
}));

const InfoCard = (props) => {
  const { Title, Icon, BodyTxt } = props;
  let classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <div style={{ paddingTop: 10 }}>{Icon}</div>
        <CardContent>
          <Typography className={classes.titleStyle} align="center">
            {Title}
          </Typography>
          <Typography className={classes.bodyTxtStyle}>{BodyTxt}</Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default InfoCard;
