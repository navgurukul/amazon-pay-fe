import { Typography } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import KajalPic from "../assets/kajal-ahirwal.png";

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
    </>
  );
}

export { NAME, LOGO, HOME_PAGE, RETURN_URL, BLOG, MAIN_CONTENT, TEXTHEAD };
