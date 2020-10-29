import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { RETURN_URL, LOGO } from "../UIComponents";
import Container from "@material-ui/core/Container";
import AMAZON_SALE from "../assets/great_indian_sale.jpg";
import AMAZON from "../assets/amazon.png";

export default function Header() {
  return (
    <div className="appbarwrapper">
      <AppBar position="fixed">
        <Container component="main">
          <Toolbar>
            <Grid justify="space-between" container>
              <Grid item>
                <a href={RETURN_URL}>
                  <Button color="inherit">
                    <img src={LOGO} alt="Logo" style={{ height: "40px" }} />
                  </Button>
                </a>
              </Grid>
              <Grid item>
                <Button disabled color="inherit">
                  <img src={AMAZON} alt="Amazon" style={{ height: "40px" }} />
                </Button>
              </Grid>
              <Grid item>
                <Button disabled color="inherit">
                  <img
                    src={AMAZON_SALE}
                    alt="Amazon Great Indian Sale"
                    style={{ height: "40px" }}
                  />
                </Button>
              </Grid>

              {/* <Grid item>
                <div>
                  <a href="#">
                    <Button color="inherit">Home</Button>
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
