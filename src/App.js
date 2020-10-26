import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Componets/Header";
import Content from "./Componets/Content";
import Form from "./Componets/Form";
import Footer from "./Componets/Footer";
import Thanks from "./Componets/Thanks";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL.includes("SUCCESS")) {
      const URLParams = currentURL.split("?")[1];
      axios
        .get(`https://donate.navgurukul.org/api/verifySignature?${URLParams}`)
        .then((res) => {
          console.log(res.data);
          setIsSuccess(true);
        })
        .catch((err) => {
          console.log(err);
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
    toDisplay = <Thanks />;
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
