import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { TEXTHEAD, MAIN_CONTENT, DONATIONIMAGE } from "../UIComponents";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: "40px",
    color: theme.palette.text.secondary,
  },
}));

export default function Text() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={0} md={1} lg={1} style={{ marginTop: "8%" }}></Grid>

        <Grid item xs={6} md={5} lg={5} style={{ marginTop: "8%" }}>
          <Container maxWidth="md">
            <TEXTHEAD />
            <MAIN_CONTENT />
            <Typography component="p" variant="body1" className="text2">
              <b>Note</b>: Only Indian Citizens making payments through their
              local bank accounts can donate.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} md={5} lg={5} style={{ marginTop: "8%" }}>
          <Container maxWidth="md">
            <DONATIONIMAGE />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
