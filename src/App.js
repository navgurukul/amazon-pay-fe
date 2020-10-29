import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Thanks from "./Components/Thanks";
import Failure from "./Components/Failure";
import { Typography } from "@material-ui/core";

function App() {
  const [screenType, setScreenType] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL.includes("status")) {
      const URLParams = currentURL.split("?")[1];
      axios
        .get(`/api/verifySignature?${URLParams}`)
        .then((res) => {
          console.log(res);
          if (res.data) {
            setReferenceId(currentURL.split("sellerOrderId=")[1].split("&")[0]);
            if (currentURL.includes("SUCCESS")) {
              setScreenType("txnSuccess");
            } else {
              setScreenType("txnFailure");
            }
          } else {
            setScreenType("signatureFailure");
          }
        })
        .catch((err) => {
          setScreenType("signatureFailure");
        });
    }
  });

  let toDisplay = (
    <React.Fragment>
      <Content />
      <Form />
    </React.Fragment>
  );

  if (screenType === "txnSuccess") {
    toDisplay = <Thanks refId={referenceId} />;
  }

  if (screenType === "txnFailure") {
    toDisplay = <Failure refId={referenceId} />;
  }

  if (screenType === "signatureFailure") {
    toDisplay = (
      <div style={{ marginTop: 100, marginRight: 20, marginLeft: 20 }}>
        <Typography variant="h4" component="h4">
          The signature couldn't be verified.
        </Typography>
        <a href="/">Try Again</a>
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      {toDisplay}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
