import SkillImageComponent from "../../skillImage/SkillImageComponent";
import "./SkillsSection.css";
import React, { useContext, useEffect, useState } from "react";
import jsonTabs from "./TabsValue.json";
import { LanguageF } from "../../../hooks/ContextLanguage";

const SkillsSection = ({ visorRef }) => {
    const [selection, setSelection] =  useState(0);
    const [selectionSkill, setSelectionSkill] =   useState(jsonTabs.Tabs[selection]);
    const {language} = useContext(LanguageF);

    const styleOption = { // Active 
        background: "rgba(69, 73, 113, 0.8)"
    }

    const tabChanged=(num)=>{
        setSelection(num);
        setSelectionSkill(jsonTabs.Tabs[num]);
    }

    return (
        <section className="skills" id="appSection2" ref={visorRef}>

            <p>My Skills</p>
            <div>
                <div className="tabs">
                    {jsonTabs.Tabs.map((tab, num) => {
                        return (<React.Fragment key={"SkillsSection_fragment_"+num}>
                            <a key={"SkillsSection_Map_a"+num} onClick={()=>tabChanged(num)} style={(selection === num) ? styleOption : null}>{tab.Name}</a>
                            {(num + 1 < jsonTabs.Tabs.length) ? (<span key={"SkillsSection_Map_span"+num} >|</span>) : null}
                        </React.Fragment>)
                    })}
                </div>
                <div className="contentSkills">
                    <p>{selectionSkill.Text[language]}</p>
                    <div>
                        {selectionSkill.Skills.map((skill, index)=>{
                            return <SkillImageComponent key={"SkillsSection_Map_SkillImageComponent"+index}
                                img={`/public/img/skills/${skill.NameImg + skill.Extension}`} text={skill.Name}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SkillsSection;