import React from "react"
import './App.css';
import Header from './Componets/Header';
import Contant from './Componets/Contant'
import Form from './Componets/Form';
import Footer from './Componets/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Contant/>
   
      <Form/> 
     <Footer/>
    </div>
  );
}

export default App;
