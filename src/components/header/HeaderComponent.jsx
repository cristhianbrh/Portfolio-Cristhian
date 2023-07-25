import "./HeaderComponent.css";
import myIcon from './../../sources/img/logo/logo.ico'
import React, { useContext, useId, useState } from "react";
import { LanguageF } from "../../hooks/ContextLanguage";

const HeaderComponent = ({optionAct, locationSection, sections}) => {
    const {language, setLanguage} = useContext(LanguageF);
    const [lanAct, setLanAct] = useState(true);

    const styleOption = [{
        color: "#aba6a6",
        fontWeight: 500,
        transition: "all 0.5s"
    },
    {
        color: "#FFFFFF",
        fontWeight: "bold",
        transition: "all 0.5s"
    }]

    // const observerSection = new IntersectionObserver((entries)=>{
    //     entries.forEach((entry=>{
    //         if(entry.isIntersecting){
    //             console.log(entry.target.id);
    //         }
    //     }))
    // });
    
    const isPressedLenguage = ()=>{
        //true:en
        //false:es
        
        //false
        setLanguage(lanAct?"es":"en");

        setLanAct(!lanAct);
        //false
        console.log(language)
    } 
    

    return (
        <header className="HeaderComponent-class">
            <nav>
                <div className="HeaderComponent-class-Logo-Switch">
                    <img src={myIcon} alt="Lol" />
                    <label>
                        <input type="checkbox" className="HeaderComponent-class-Logo-Switch-input" onClick={isPressedLenguage}/>
                        <span className="HeaderComponent-class-Logo-Switch-span">es en</span>
                    </label>
                </div>

                <div className="HeaderComponent-class-sections">
                    {sections.map((section, num) => {
                        
                        return(<React.Fragment key={"HeaderComponent-class_"+num}>
                            <a key={"HeaderComponent_sections1_"+num} onClick={()=>locationSection(num)}
                                style={(optionAct===num)?styleOption[1]:styleOption[0]}>{section}</a>
                            {(num + 1 < sections.length) ? (<span key={"HeaderComponent_sections1_span_"+num}>|</span>) : null}
                        </React.Fragment>)}
                    )}
                </div>
            </nav>
        </header>
    )
    
}
export default HeaderComponent;