import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from "./components/Header/Header";
import Main   from "./components/Main/Main"
import Footer from "./components/Footer/Footer";

function App() {
  var containerFluidStyle = {
    backgroundColor: "#202020",
    paddingTop: "3em",
    paddingBottom: "3em",
  }
  return (
    <div className="container-fluid" style={containerFluidStyle}>
      <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></link>
      <div className="container">
        <div className="row">
          <Header />
          <Main   />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;