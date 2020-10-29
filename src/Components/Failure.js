import React from "react";
import { Typography } from "@material-ui/core";
import {NAME} from "../UIComponents";

function Failure(props) {
  NAME = "Peepul";
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

/* Your transaction didn't go through. 

Your order Id is : 20201028103518457.

You can try again or contact the admins at hi@navgurukul.org.

<a href="/">Try Again</a>
Your transaction didn't go through. 

Your order Id is : 20201028103518457.

Your transaction didn't go through. You can try again or contact the admins at finance@peepulindia.org.

<a href="/">Try Again</a> */
