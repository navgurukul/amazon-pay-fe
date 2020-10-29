import React from "react";
import KajalPic from "../assets/kajal-ahirwal.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
      Help Girls from rural India
      <br />
      to learn Coding. Donate devices.
    </Typography>
  );
}

function MAIN_CONTENT() {
  return (
    <>
      <Container>
        <Box display="block" style={{ marginTop: 120 }}></Box>
        <TEXTHEAD />
        <Grid
          item
          xs={12}
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <img src={KajalPic} alt="Kajal Ahirwal" style={{ height: 96 }} />;
          <Typography
            component="p"
            variant="body1"
            style={{ margin: 16, marginTop: 0 }}
          >
            Kajal an 18 year old girl, a 10th standard student, with less than 6
            months of training at Navgurukul - is now working at <b>Mindtree</b>{" "}
            with a 4.2 lacs annual package. Based out of Delhi, her father is a
            rickshaw puller and mother a domestic cook in Delhi.
          </Typography>
        </Grid>

        <Typography component="p" variant="body1" className="text1" style={{margin: 16, marginTop: 0}}>
          {/* One-year fully residential course for students from low-income &amp;
          marginalised communities in Software Engineering enabling them to get
          an aspirational job, have a voice, and be equipped to bring at least
          10 families out of poverty in a financially sustainable model. To know
          more, visit{" "}
          <a href="https://navgurukul.org" target="_blank">
            our website
          </a>
          . */}
          We are raising <b>12,50,000 INR</b> to buy low-end smartphones and data packs for the girls from rural India (especially working with women at distress, eg. <b>HIV+, survivor from trafficking</b>, etc.). <b>4000 INR</b> can educate one child and teach them how to code. To know more details you can visit our <a href="https://navgurukul.org" target="_blank">website</a>.
        </Typography>
        <Typography component="p" variant="body1" className="text2" style={{margin: 16, marginTop: 0}}>
          <b>Note</b>: Only Indian Citizens making payments through their local
          bank accounts can donate.
        </Typography>
      </Container>
    </>
  );
}

export { NAME, LOGO, HOME_PAGE, RETURN_URL, BLOG, MAIN_CONTENT, TEXTHEAD };