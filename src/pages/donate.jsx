import { Typography, Grid, Card, CardContent, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { Component, useState } from "react";
import SearchAppBar from "../components/SearchAppBar";
import { GiPayMoney } from "react-icons/gi";
import { GrBitcoin, GrPaypal } from "react-icons/gr";
import Footer from "../components/footer";

const useStyles = makeStyles((theme) => ({
  bodyTxt: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(7),
    fontSize: "1.2rem",
  },
  img: {
    paddingTop: theme.spacing(6),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
  },
  card: {
    height: "60vh",
    width: "40vw",
    borderRadius: "2rem",
    background: "#28A745",
    color: "#fff",
    // transition: "0.3s",
  },
  title: {
    fontFamily: "Nunito",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  cardDiv: {
    align: "center",
  },
  cardItems: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    fontSize: "1.2rem",
  },
  payIcon: {
    color: "#fff",
    transition: "0.3s",
    "&:hover": {
      color: "#6d0c30",
      cursor: "pointer",
    },
  },
  notification: {
    backgroundColor: "black",
    opacity: 0.75,
  },
  notificationDiv: {
    paddingTop: theme.spacing(2),
  },
  space: {
    height: "30vh",
  },
  donateIcon: {
    color: "#28A745",
  },
}));

const Donate = () => {
  let classes = useStyles();
  const [address, setAddress] = useState({
    bitcoin: "bitcoin-1-address-2",
    paypal: "paypal@example.com",
  });

  const [sliderIn, setSliderIn] = useState(false);

  const copied = (toWrite) => {
    navigator.clipboard.writeText(toWrite);
    setSliderIn(true);

    setTimeout(function () {
      setSliderIn(false);
    }, 900);
  };

  return (
    <div>
      <header>
        <SearchAppBar />
      </header>
      <body>
        <Grid container>
          <Grid item xs={4}>
            <Typography className={classes.bodyTxt}>
              If you like this application and have a few bucks to spare, a
              small donation is very welcome. I will use that money to shift the
              application and the database to a better service for faster speeds
              and in order to keep this website ad-free. Since I am a sole
              developer, it will also help in faster fixing of bugs and I'll be
              able to dedicate more time to adding new features and upkeep.
            </Typography>
          </Grid>
          <Grid align="center" item xs={4} className={classes.cardGrid}>
            <Card className={classes.card}>
              <CardContent>
                <Typography align="center" className={classes.title}>
                  DONATE
                </Typography>
                <Typography
                  className={`${classes.cardItems} ${classes.payIcon}`}
                  align="left"
                  onClick={() => copied(address.bitcoin)}
                >
                  <GrBitcoin size={40} /> {address.bitcoin}
                </Typography>
                <Typography
                  className={`${classes.cardItems} ${classes.payIcon}`}
                  align="left"
                  onClick={() => copied(address.paypal)}
                >
                  <GrPaypal size={40} /> {address.paypal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid align="right" item xs={4} className={classes.img}>
            <GiPayMoney className={classes.donateIcon} size={300} />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <div className={classes.notificationDiv}>
              <Zoom in={sliderIn}>
                <Card className={classes.notification}>
                  <CardContent>
                    <Typography align="center" style={{ color: "white" }}>
                      Copied to clipboard
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            </div>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={12}>
            <div className={classes.space} />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </body>
    </div>
  );
};

export default Donate;
