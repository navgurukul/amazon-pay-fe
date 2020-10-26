import React from "react";
import "./App.css";
import Header from "./Componets/Header";
import Content from "./Componets/Content";
import Form from "./Componets/Form";
import Footer from "./Componets/Footer";
// import Thanks from "./Thanks"
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Form />

      <Footer />
      {/* <Thanks/> */}


    </div>
  );
}

export default App;
