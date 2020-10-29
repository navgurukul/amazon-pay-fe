import React from "react";
<<<<<<< HEAD
import Grid from "@material-ui/core/Grid";
import KajalPic from "../assets/kajal-ahirwal.png";
=======
import { Typography } from "@material-ui/core";
>>>>>>> fe4c3edd249f88a3523888787a4122783ab3715d

import DonationImage from "../assets/donation.jpg";

const NAME = "Peepul";
const LOGO = "https://navgurukul.org/assets/img/peepul.png";
const HOME_PAGE = "https://www.peepulindia.org/";
const RETURN_URL = "https://donate.peepulschools.org/";
const BLOG = "https://twitter.com/peepulindia?lang=en";

function TEXTHEAD() {
  return (
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
  );
}

function MAIN_CONTENT() {
  return (
    <>
<<<<<<< HEAD
      <Grid item xs={12} style={{ marginTop: "8%" }}>
        <Grid item xs={12} style={{flexDirection: "row", display: "flex", alignItems: "center"}}>
          <img src={KajalPic} alt="Kajal Ahirwal" style={{height:96}}/>;
          <Typography component="p" variant="body1" style={{margin: 16, marginTop: 0}}>
            Kajal an 18 year old girl, a 10th standard student, with less than 6 months of training at Navgurukul - is now working at <b>Mindtree</b> with a 4.2 lacs annual package.  Based out of Delhi, her father is a rickshaw puller and mother a domestic cook in Delhi.
          </Typography>          
        </Grid>

        <Typography component="p" variant="body1" className="text1">
          One-year fully residential course for students from low-income & marginalised communities in Software Engineering enabling them to get an aspirational job, have a voice, and be equipped to bring at least 10 families out of poverty in a financially sustainable model.
          <br/>
          <br/>
          Donate now towards future of 600+ girls like Kajal enroled in our residential courses now.
        </Typography>
      </Grid>
=======
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
>>>>>>> fe4c3edd249f88a3523888787a4122783ab3715d
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
  TEXTHEAD,
  DONATIONIMAGE,
};
