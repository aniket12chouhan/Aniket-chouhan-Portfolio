import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";



const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="myskill">
          <MySkills />
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default App;
