import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Config from "../UIComponents/index";
import Success from "../assets/success.png";

function Thanks(props) {
  let MESSAGE = `Thank you for your donation! `;
  let MESSSAGE1 = `Donations to NavGurukul Foundation for Social Welfare qualify for deduction u/s 80G(5) of Income Tax Act 1961 vide order No. CIT (E)/Chd/80G/AAFCN4164J/2017-18/6959 dated November 28, 2017.`;
  let MESSAGE2 = `We will be sharing an 80G receipt to you within 3 weeks of this transaction.`;
  let MESSAGE3 = `For more information, you can write to us at hi@navgurukul.org.`;
  let referenceMessage = `Your transaction reference Id is ${props.refId} `;

  if (Config.NAME === "Peepul") {
    MESSSAGE1 = `All of us at Peepul (regd. as Absolute Return for Kids), greatly appreciate your donation. It is wonderful to find a champion for the cause in you, who our dream of enabling and supporting every child in India to achieve their potential.`;
    MESSAGE2 = `Please note: Donations to Peepul (regd. as Absolute Return for Kids), qualify for deduction u/s 80G(5) of Income Tax Act 1961 vide order NQ.DIT (E) 2011-2012/ DEL - AE23043-25082011/1063 dated August 25, 2011.`;
    MESSAGE3 = `We will be sharing an 80G receipt to you within 3 weeks of this transaction. For more information, please write to us at info@peepulindia.org.`;
  }
  return (
    <div style={{ marginTop: 100, marginRight: 20, marginLeft: 20 }}>
      <img src={Success} alt="Logo" />;
      <Typography variant="h4" component="h4">
        {MESSAGE}
      </Typography>
      <br />
      <br />
      {referenceMessage}
      <br />
      <br />
      {MESSSAGE1}
      <br />
      <br />
      {MESSAGE2}
      <br />
      <br />
      {MESSAGE3}
      <br />
    </div>
  );
}

export default Thanks;

/* Thank you for your donation! 

All of us at Peepul (regd. as Absolute Return for Kids), greatly appreciate your donation. It is wonderful to find a champion for the cause in you, who our dream of enabling and supporting every child in India to achieve their potential. 

Please note: Donations to Peepul (regd. as Absolute Return for Kids), qualify for deduction u/s 80G(5) of Income Tax Act 1961 vide order NQ.DIT (E) 2011-2012/ DEL - AE23043-25082011/1063 dated August 25, 2011.
*/
