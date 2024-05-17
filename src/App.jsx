import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Companies from "./components/companies/companies";
import BeastDeals from "./components/best deals/bestdeals";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <BeastDeals />
    </>
  );
}

export default App;
