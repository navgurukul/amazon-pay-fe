import { Typography } from "@material-ui/core";
import React from "react";
import DonationImage from "../assets/kajal-ahirwal.png";

const NAME = "Navgurukul";
const LOGO = "https://navgurukul.org/assets/img/logo.png";
const HOME_PAGE = "https://navgurukul.org/";
const RETURN_URL = "https://donate.navgurukul.org/";
const BLOG = "https://medium.com/navgurukul";

function TEXTHEAD() {
  return (
    <Typography
      component="h4"
      variant="h4"
      className="Heading"
      className="text-align-center"
    >
      Help Girls from Low-income Communities
      <br />
      to become Software Engineer.
    </Typography>
  );
}

function MAIN_CONTENT() {
  return (
    <>
      <Typography component="p" variant="body1" className="text1">
        More than 100+ students have been placed into various MNCs and startups
        as Software Programmers.
      </Typography>
      <Typography component="p" variant="body1" className="text1">
        You can donate heartily to this campaign to support employment of girls
        from marginalised areas across the country.
      </Typography>
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
