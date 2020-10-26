import { Typography } from "@material-ui/core";
import React from "react";
import Success from "./succuss.jpeg";

export default function Thanks() {
  return (
    <div style={{ marginTop: "100px" }}>
      <img src={Success} alt="Logo" />
      <Typography component="h5" variant="h5">
        Thank You For Donating!
      </Typography>
    </div>
  );
}
