import React from "react";
import "./App.css";
import Header from "./Componets/Header";
import Content from "./Componets/Content";
import Form from "./Componets/Form";
import Footer from "./Componets/Footer";
import Thanks from "./Componets/Thanks";

function App() {
  let toDisplay = (
    <React.Fragment>
      <Content />
      <Form />
    </React.Fragment>
  );
  if (window.location.href.includes("SUCCESS")) {
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
