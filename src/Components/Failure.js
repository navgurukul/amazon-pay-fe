import React from "react";
import { Typography } from "@material-ui/core";
import { NAME } from "../UIComponents";

function Failure(props) {
  console.log(NAME);
  let email = "hi@navgurukul.org.";
  if (NAME === "Peepul") {
    email = "info@peepulindia.org";
  }
  let MESSAGE = `Your transaction didn't go through.`;
  let referenceMessage = `Your reference id is : ${props.refId} `;
  let MESSAGE1 = `You can try again or contact the admins at ${email}`;

  return (
    <div style={{ marginTop: 100, marginRight: 20, marginLeft: 20 }}>
      <Typography variant="h4" component="h4">
        {MESSAGE}
      </Typography>
      <br />
      <br />
      {referenceMessage}
      <br />
      <br />
      {MESSAGE1}
      <br />
      <br />
      <a href="/">Try Again</a>
    </div>
  );
}

export default Failure;
