import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Componets/Header";
import Content from "./Componets/Content";
import Form from "./Componets/Form";
import Footer from "./Componets/Footer";
import Thanks from "./Componets/Thanks";
import Failure from "./Componets/Failure";
import { Typography } from "@material-ui/core";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [signatureFailed, setSignatureFailed] = useState(false);

  useEffect(() => {
    const currentURL = window.location.href;
    console.log(currentURL);
    if (currentURL.includes("status")) {
      const URLParams = currentURL.split("?")[1];
      axios
        .get(`/api/verifySignature?${URLParams}`)
        .then((res) => {
          console.log(res);
          if (res.data) {
            setReferenceId(currentURL.split("sellerOrderId=")[1].split("&")[0]);
            if (currentURL.includes("SUCCESS")) {
              setIsSuccess(res.data);
              console.log(isSuccess);
            } else {
              setIsFailed(res.data);
            }
          } else {
            setSignatureFailed(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setSignatureFailed(true);
        });
    }
  });

  let toDisplay = (
    <React.Fragment>
      <Content />
      <Form />
    </React.Fragment>
  );
  if (isSuccess) {
    toDisplay = <Thanks refId={referenceId} />;
  }

  if (isFailed === true) {
    toDisplay = <Failure refId={referenceId} />;
  }

  if (signatureFailed) {
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
      <Footer />
    </div>
  );
}

export default App;
