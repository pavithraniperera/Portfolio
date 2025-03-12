import React from "react";
import NavBar from "./Components/Navbar";
import Hero from "./sections/Hero";
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from "./sections/AboutMe";
import MyProject from "./sections/MyProject";
import ContactMe from './sections/ContactMe'
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <TechnicalProficiency/>
      <AboutMe/>
      <MyProject/>
      <ContactMe/>
      <Footer/>
    </div>
  );
};
export default App;
