import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Componets/Header";
import Content from "./Componets/Content";
import Form from "./Componets/Form";
import Footer from "./Componets/Footer";
import Thanks from "./Componets/Thanks";
// import Failure from "./Componets/Failure";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  // const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL.includes("SUCCESS")) {
      const URLParams = currentURL.split("?")[1];
      axios
        .get(`/api/verifySignature?${URLParams}`)
        .then((res) => {
          console.log(res.data);
          setIsSuccess(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // else if (currentURL.includes("FAILURE")) {
    //   setIsFailed(true);
    // }
  });

  let toDisplay = (
    <React.Fragment>
      <Content />
      <Form />
    </React.Fragment>
  );
  if (isSuccess) {
    toDisplay = <Thanks />;
  }

  // if (isFailed === true) {
  //   toDisplay = (
  //     <React.Fragment>
  //       <Content />
  //       <Failure />
  //       <Form />
  //     </React.Fragment>
  //   );
  // }

  return (
    <div className="App">
      <Header />
      {toDisplay}
      <Footer />
    </div>
  );
}

export default App;
