import { useRef, useState } from "react";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import useVisible from "./hooks/useVisible";
import PresentationSection from "./components/sections/presentation/PresentationSection";
import AboutMeSection from "./components/sections/aboutMe/AboutMeSection";
import ProyectsSection from "./components/sections/proyects/ProyectsSection";
import ContactSection from "./components/sections/contact/ContactSection";
import FooterComponent from "./components/footer/FooterComponent";
import SkillsSection from "./components/sections/skills/SkillsSection";

function App() {
  const [sections, setSections] = new useState(["Home", "About me", "Skills", "Proyects", "Contact"]);



    const [sectionCurrent, setSectionCurrent] = new useState(0);
    const locationSection = (numSectionGo) => {
        const setTop = document.getElementById(`appSection${numSectionGo}`);
        setTop.scrollIntoView({
            top: "start",
            behavior: "smooth"
        })
        setSectionCurrent(numSectionGo);
    }

    const visorRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const visible = [useVisible({ visorRef: visorRefs[0], setSectionCurrent: setSectionCurrent }), useVisible({ visorRef: visorRefs[1], setSectionCurrent: setSectionCurrent }), useVisible({ visorRef: visorRefs[2], setSectionCurrent: setSectionCurrent }), useVisible({ visorRef: visorRefs[3], setSectionCurrent: setSectionCurrent }), useVisible({ visorRef: visorRefs[4], setSectionCurrent: setSectionCurrent })];

  return (
    <>
      <HeaderComponent optionAct={sectionCurrent} sections={sections} locationSection={locationSection} />
      <PresentationSection visorRef={visorRefs[0]} />
      <AboutMeSection visorRef={visorRefs[1]} />
      <SkillsSection visorRef={visorRefs[2]}/>
      <ProyectsSection visorRef={visorRefs[3]}/>
      <ContactSection visorRef={visorRefs[4]}/>   
      <FooterComponent/>
    </>
  )
}

export default App
