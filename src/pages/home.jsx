import React, { Component } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Input,
} from "@material-ui/core";
import SearchAppBar from "../components/SearchAppBar";
import FormatDropdown from "../components/FormatDropdown";
import LandingWallpaper from "../components/LandingWallpaper";
import Info from "../components/Info";

class Home extends Component {
  scrollToInfo = () => {
    const info = document.getElementById("info");
    info.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div>
        <header>
          <SearchAppBar />
        </header>
        <body>
          <Grid container>
            <Grid item xs={12}>
              <LandingWallpaper scrollToInfo={this.scrollToInfo} />
            </Grid>
          </Grid>
        </body>
      </div>
    );
  }
}

export default Home;
