import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { BackgroundLines } from "./components/ui/background-lines";
import CircularText from "./components/ui/circular-text";
import DockNav from "./components/ui/nav3";
import Gallery from "./components/ui/GalleryMain";
import HeaderAnimation from "./components/ui/HeaderAnimation";
import Tagline from "./components/ui/Tagline";
import SlantedCard from "./components/ui/cardHover";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";
import TestimonialCarousel from "./components/ui/TestimonalCarousel";
import ContactForm from "./components/ui/ContactForm";
import SpsModify from "./components/ui/SpsModify";
import PrevEditions from "./components/ui/PrevEditions";

function Home() {
  const [animateText, setAnimateText] = useState(false);
  const textSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimateText(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (textSectionRef.current) observer.observe(textSectionRef.current);

    return () => {
      if (textSectionRef.current) observer.unobserve(textSectionRef.current);
    };
  }, []);

  return (
    <div>
      <div>
        
      </div>
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
    <BackgroundLines className={"fixed inset-0 -z-5"}/>
      

      <div className="fixed top-5 right-5 sm:top-8 sm:right-8 z-10">
        <CircularText text="ACM . VNRVJIET . WEBATHON . " spinDuration={10} imageSrc="/ACMlogo.png" />
      </div>

      {/* Hero Section */}
      <div className="absolute  top-0 left-0 w-full h-[70vh] flex flex-col items-center justify-center text-center p-0 m-0 sm:mt-20 md:mt-32">
        <HeaderAnimation
          text="WEBATHON 3.0"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-webathon font-bold"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
        />
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 gap-x-2 md:gap-x-5">
          <h1 className="font-tagline text-[clamp(1.5rem,5vw,3rem)] font-semibold">Where You</h1>
          <button className="relative flex items-center justify-center px-6 md:px-10 py-3 min-w-[250px] md:w-auto lg:w-auto rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-all transform hover:scale-105">
            <Tagline texts={["Design", "Develop", "Deploy"]} className="text-[clamp(1.5rem,5vw,3rem)] font-tagline text-center w-full" />
          </button>
        </div>
      </div>

      {/* Previous Editions */}
      <div id="previous-editions" className="relative z-0 flex flex-col mt-[1100px] justify-center items-center h-auto py-10 px-4 sm:px-6 md:px-8">
        <h1 className="font-tagline text-[clamp(1.5rem,5vw,3rem)] font-semibold text-center mb-6">Previous Editions</h1>
        <PrevEditions />
      </div>

      
      {/* About Us */}
      <div ref={textSectionRef} id="about" className="relative z-0 flex mt-40 flex-col items-center justify-center text-center mx-auto px-4 sm:px-6 md:px-8 w-full max-w-screen-md">
        <h1 className="font-tagline text-[clamp(1.5rem,5vw,3rem)] font-semibold mb-6">About Us</h1>
        <TextGenerateEffect 
          words='" Webathon, organized by ACM, fosters collaboration and innovation in web development. Participants gain hands-on experience, learn from experts, and enhance skills through real projects. "' 
          className="text-center font-about text-[clamp(1rem,4vw,1.5rem)] leading-relaxed" 
          duration={0.5} 
          playAnimation={animateText}
        />
      </div>

      <SpsModify className="relative z-0" />
      <div id="Testimonials" ><TestimonialCarousel className="relative z-0"/></div>
      <div id="contact"><ContactForm /></div>
    </div>
    </div>
    
  );
}

function App() {
  return (
    <Router>

      <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
        {/* Global Background */}
        <BackgroundLines className={"fixed inset-0 -z-5"} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        
        <DockNav />
      </div>
    </Router>
  );
}

export default App;
