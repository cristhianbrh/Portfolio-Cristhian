import { useEffect, useRef, useState } from "react";
import SkillImageComponent from "../skillImage/SkillImageComponent";
import "./ProyectComponent.css";
import ImagesViewComponent from "../ImagesView/ImagesViewComponent";
const ProyectComponent = ({ proyect, setImgComplete, setProyectActView }) => {
    const proyectsPath = "./public/img/Proyects/";
    const [activeImgProyect, setActiveImgProyect] = useState(true);

    return (
        <>
            <div className="ProyectComponentClass">
                <div className="proyectsRedirectionsProyect">
                    <a href={proyect.Website} target="_blank"><p>Website</p></a>
                    <a href={proyect.Repository} target="_blank"><p>Repository</p></a>
                </div>
                <img src={proyectsPath + proyect.Icon.NameImg + proyect.Icon.Extension} />
                <p className="proyectsTitleProyect">{proyect.Name}</p>
                <div className="imagesProyectsDisplay" onClick={()=>{setImgComplete(true); setProyectActView(proyect);}} onMouseEnter={() => setActiveImgProyect(false)} onMouseLeave={() => setActiveImgProyect(true)}>
                    <img src={proyectsPath + proyect.ImagesDisplay.Desktop} />
                    <img src={proyectsPath + proyect.ImagesDisplay.Tablet} />
                    <img src={proyectsPath + proyect.ImagesDisplay.Mobile} />
                    <span className={activeImgProyect ? "__visibleNot" : ""}></span>
                    <svg className={activeImgProyect ? "__visibleNot" : ""} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                    </svg>
                </div>
                <p className="proyectsDescriptionProyect">{proyect.Description}</p>
                <div className="proyectsTecProyect">
                    {
                        proyect.Technologies.map((tech, index) =>
                            // <img src={technologies("./"+tech.NameImg+tech.Extension)} />
                            <SkillImageComponent img={"./public/img/skills/" + tech.NameImg + tech.Extension} 
                                text={tech.Name} key={"ProyectComponent_SkillImageComponent"+index} />
                        )
                    }
                </div>
            </div>
            {/* <ImagesViewComponent proyect={proyect} imgComplete={imgComplete} setImgComplete={setImgComplete}/> */}
        </>
    )
}
export default ProyectComponent;