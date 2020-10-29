import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MAIN_CONTENT } from "../UIComponents";

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
        <MAIN_CONTENT/>
      </Grid>
    </div>
  );
}
