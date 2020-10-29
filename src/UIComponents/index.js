import React from "react";
import { Typography } from "@material-ui/core";

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

function TEXT1() {
  return (
    <Typography
      style={{ fontFamily: "Open Sans", fontWeight: 600 }}
      component="p"
      variant="body1"
      className="text1"
    >
      Thank you for your support! We support 1000 children from Delhi’s poorest
      communities, and your support will help them attend classes, engage in
      learning and achieve.
    </Typography>
  );
}

function TEXT2() {
  return (
    <Typography
      style={{ fontFamily: "Open Sans", fontWeight: 600 }}
      component="p"
      variant="body1"
      className="text1"
    >
      For direct donations via Amazon Pay, please use the form below. To donate
      a device/accessory, please see our{" "}
      <a
        href="https://www.amazon.in/hz/wishlist/ls/25X29BDNI7EQ1?&sort=default"
        target="_blank"
      >
        <u>Amazon Wishlist</u>
      </a>
      . To know more about our work, please see our{" "}
      <a href="https://www.peepulindia.org" target="_blank">
        <u>website</u>
      </a>
      .
    </Typography>
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
  TEXT1,
  TEXT2,
  TEXTHEAD,
  DONATIONIMAGE,
};
