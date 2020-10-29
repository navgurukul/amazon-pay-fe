import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DonationImage from "../assets/donation.jpg";

const NAME = "Peepul";
const LOGO = "https://navgurukul.org/assets/img/peepul.png";
const HOME_PAGE = "https://www.peepulindia.org/";
const RETURN_URL = "https://donate.peepulschools.org/";
const BLOG = "https://twitter.com/peepulindia?lang=en";

function MAIN_CONTENT() {
  return (
    <>
      <Grid item xs={12} md={6} lg={6} style={{ marginTop: "8%" }}>
        <Container maxWidth="md">
          <Typography
            component="h4"
            variant="h4"
            className="Heading"
            className="text-align-center"
            style={{ fontFamily: "Comfortaa", color: "#0d154a" }}
          >
            Donate for devices.
            <br />
            Make a difference.
          </Typography>

          <Typography
            style={{ fontFamily: "Open Sans", fontWeight: 600 }}
            component="p"
            variant="body1"
            className="text1"
          >
            For direct donations via Amazon Pay, please use the form below. To
        donate a device/accessory, please see our{" "}
            <a
              href="https://www.amazon.in/hz/wishlist/ls/25X29BDNI7EQ1?&sort=default"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Amazon Wishlist</u>
            </a>
        . To know more about our work, please see our{" "}
            <a
              href="https://www.peepulindia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>website</u>
            </a>
        .
      </Typography>
          <Typography component="p" variant="body1" className="text2">
            <b>Note</b>: Only Indian Citizens making payments through their
              local bank accounts can donate.
            </Typography>
        </Container>
      </Grid>
      <Grid item xs={12} md={6} lg={6} style={{ marginTop: "8%" }}>
        <Container maxWidth="md">
          <DONATIONIMAGE />
        </Container>
      </Grid>
    </>
  );
}

function DONATIONIMAGE() {
  return (
    <img style={{ height: "300px" }} src={DonationImage} alt="Donate"></img>
  );
}

export {
  NAME,
  LOGO,
  HOME_PAGE,
  RETURN_URL,
  BLOG,
  MAIN_CONTENT,
  DONATIONIMAGE,
};
