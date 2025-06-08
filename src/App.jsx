import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Whatsapp from "./components/Whatsapp.component";
import Call from "./components/Call.component";
import Toppers from "./components/Toppers";
import SubjectToppers from "./components/SubjectToppers";
import RecentResults from "./components/RecentResults";
import { ThemeProvider } from "./contexts/ThemeContext";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Call />
        <Whatsapp />
        <Navigation />

        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <RecentResults data={landingPageData.RecentResults} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <Toppers data={landingPageData.Toppers} />
        <SubjectToppers data={landingPageData.SubjectToppers} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </div>
    </ThemeProvider>
  );
};

export default App;
