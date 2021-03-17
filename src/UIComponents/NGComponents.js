import React from "react";
import KajalPic from "../assets/kajal.jpeg";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Form from "../Components/Form";
const NAME = "Navgurukul";
const LOGO = "https://navgurukul.org/assets/img/logo.png";
const HOME_PAGE = "https://navgurukul.org/";
const RETURN_URL = "https://donate.navgurukul.org/";
const BLOG = "https://medium.com/navgurukul";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // marginTop:12
  },
  media: {
    height: 230,
  },
});

function TEXTHEAD() {
  return (
    <Typography
      component="h3"
      variant="h3"
      className="Heading"
      className="text-align-center"
      // style={{ marginBottom: "10px" }}
    >
      Donate
    </Typography>
  );
}

function MAIN_CONTENT() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 90  }}>
        <TEXTHEAD />
        <Grid container >
        <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={KajalPic}
                title="Kajal Ahirwal"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Kajal an 18 year old girl, a 10th standard student, with less than 6
            months of training at Navgurukul - is now working at <b>Mindtree</b>{" "}
            with a 4.2 lacs annual package. Based out of Delhi, her father is a
            rickshaw puller and mother a domestic cook in Delhi.
          </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              component="p"
              variant="body1"
              className="text1"
              style={{marginTop: 10000 }}
            >
              {/* One-year fully residential course for students from low-income &amp;
          marginalised communities in Software Engineering enabling them to get
          an aspirational job, have a voice, and be equipped to bring at least
          10 families out of poverty in a financially sustainable model. To know
          more, visit{" "}
          <a href="https://navgurukul.org" target="_blank">
            our website
          </a>
          . */}
          We are raising <b>12,50,000 INR</b> to buy low-end smartphones and
          data packs for the girls from rural India (especially working with
          women at distress, eg. <b>HIV+, survivor from trafficking</b>, etc.).{" "}
              <b>4000 INR</b> can educate one child and teach them how to code. To
          know more details you can visit our{" "}
              <a href="https://navgurukul.org" target="_blank">
                website
          </a>
          .
        </Typography>
            <Typography
              component="p"
              variant="body1"
              className="text2"
              style={{ margin: 16, marginTop: 0 }}
            >
              <b>Note</b>: Only Indian Citizens making payments through their local
          bank accounts can donate.
        </Typography>
        <Typography
      component="h5"
      variant="h5"
      className="Heading"
      className="text-align-center"
    >
      Help Girls from rural India
   
      to learn Coding.
    </Typography>
    <Form />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export { NAME, LOGO, HOME_PAGE, RETURN_URL, BLOG, MAIN_CONTENT, TEXTHEAD };
