import "./HeaderComponent.css";
import myIcon from './../../sources/img/logo/logo.ico'
import React, { useContext, useId, useState } from "react";
import { LanguageF } from "../../hooks/ContextLanguage";

const HeaderComponent = ({ optionAct, locationSection, sections }) => {
    const { setLanguage } = useContext(LanguageF);
    const [lanAct, setLanAct] = useState(true);
    const [menuActive, setMenuActive] = useState(false);

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

    const isPressedLenguage = () => {
        //true:en
        //false:es

        //false
        setLanguage(lanAct ? "es" : "en");

        setLanAct(!lanAct);
        //false

    }


    return (
        <header className="HeaderComponent-class">
            <nav>
                <div className="HeaderComponent-class-Logo-Switch">
                    <img src={myIcon} alt="Lol" />
                    <label>
                        <input type="checkbox" className="HeaderComponent-class-Logo-Switch-input" onClick={isPressedLenguage} />
                        <span className="HeaderComponent-class-Logo-Switch-span">es en</span>
                    </label>
                </div>

                <div className="HeaderComponent-class-sections">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setMenuActive(!menuActive)} width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <div className={!menuActive?"HeaderComponent-class-sectionsDiv__Noactive":""}>
                        {sections.map((section, num) => {

                            return (<React.Fragment key={"HeaderComponent-class_" + num}>
                                <a key={"HeaderComponent_sections1_" + num} onClick={() => locationSection(num)}
                                    style={(optionAct === num) ? styleOption[1] : styleOption[0]}>{section}</a>
                                {(num + 1 < sections.length) ? (<span key={"HeaderComponent_sections1_span_" + num}>|</span>) : null}
                            </React.Fragment>)
                        }
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )

}
export default HeaderComponent;