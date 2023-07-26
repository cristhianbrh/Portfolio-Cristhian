import { useContext, useState } from "react";
import ImagesViewComponent from "../../ImagesView/ImagesViewComponent";
import ProyectComponent from "../../Proyect/ProyectComponent";
import "./ProyectsSection.css";
import  jsonProyects  from "./ProyectsValue.json";
import { LanguageF } from "../../../hooks/ContextLanguage";

const ProyectsSection = ({ visorRef }) => {
    const [imgComplete, setImgComplete] = useState(false);
    const [proyectActView, setProyectActView] = useState(jsonProyects.Proyects[0]);
    const {language} = useContext(LanguageF)
    const languageTexts = {
        "en": "My proyects",
        "es": "Mis proyectos"
    }

    return (
        <section style={{position:"relative"}} className="proyects" id="appSection3" ref={visorRef}>
            <p>{languageTexts[language]}</p>
            <div >
                <div className="proyectsSection_content">
                    {
                        jsonProyects.Proyects.map((proyect, index) =>
                             <ProyectComponent proyect={proyect} setProyectActView={setProyectActView} key={"ProyectsSection" + proyect.Name + index} setImgComplete={setImgComplete}/>
                        )
                    }
                    <ImagesViewComponent proyect={proyectActView} imgComplete={imgComplete} setImgComplete={setImgComplete}/>
                </div>
            </div>
        </section>
    )
}
export default ProyectsSection;