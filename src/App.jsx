import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import WhyHireMe from "./WhyHireMe"
import Footer from "./Footer";
import { Toaster } from "sonner";
import "./index.css";

function App() {
  return (
    <div className="App noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
          <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#121214",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#ececea",
          },
        }}
      />
    </div>
  );
}

export default App;
