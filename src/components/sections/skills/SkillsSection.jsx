import SkillImageComponent from "../../skillImage/SkillImageComponent";
import "./SkillsSection.css";
import { useEffect, useState } from "react";
import jsonTabs from "./TabsValue.json";

const SkillsSection = ({ visorRef }) => {
    const [selection, setSelection] =  useState(0);
    const [selectionSkill, setSelectionSkill] =   useState(jsonTabs.Tabs[selection]);

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
                        return (<>
                            <a key={"skillstabs_"+num} onClick={()=>tabChanged(num)} style={(selection === num) ? styleOption : null}>{tab.Name}</a>
                            {(num + 1 < jsonTabs.Tabs.length) ? (<span >|</span>) : null}
                        </>)
                    })}
                </div>
                <div className="contentSkills">
                    <p>{selectionSkill.Text}</p>
                    <div>
                        {selectionSkill.Skills.map((skill, index)=>{
                            return <SkillImageComponent img={`/public/img/skills/${skill.NameImg + skill.Extension}`} text={skill.Name}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SkillsSection;