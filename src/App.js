// import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./LandingPage/landing_page";
import Postview from "./PostView/postview";
import Uploadview from "./Uploadview/Uploadview";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/postview" element={<Postview />} />
        <Route path= "/uploadview" element ={<Uploadview />}/>
      </Routes>
    </div>
  );
}

export default App;
