import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Config from "../UIComponents.js";
import Container from "@material-ui/core/Container";

export default function Header() {
  return (
    <div className="appbarwrapper">
      <AppBar position="fixed">
        <Container component="main">
          <Toolbar>
            <Grid justify="space-between" container>
              <Grid item>
                <a href={Config.RETURN_URL}>
                  <Button color="inherit">
                    <img
                      src={Config.LOGO}
                      alt="Logo"
                      style={{ height: "40px" }}
                    />
                  </Button>
                </a>
              </Grid>
              {/* <Grid item>
                <div>
                  <a href="#">
                    <Button color="inherit">Home</Button>
                  </a>
                  <a href={Config.HOME_PAGE}>
                    {" "}
                    <Button color="inherit">About Us</Button>
                  </a>
                  <a href={Config.BLOG}>
                    {" "}
                    <Button color="inherit">BLOG</Button>
                  </a>
                  <a href="#">
                    <Button color="inherit">Contact Us</Button>
                  </a>
                </div>
              </Grid> */}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
