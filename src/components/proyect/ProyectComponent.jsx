import SkillImageComponent from "../skillImage/SkillImageComponent";
import "./ProyectComponent.css";
const ProyectComponent = ({ proyect }) => {
    const proyectsPath = "./public/img/Proyects/";
    return (
        <div className="ProyectComponentClass">
            <div className="proyectsRedirectionsProyect">
                <a href={proyect.Website} target="_blank"><p>Website</p></a>
                <a href={proyect.Repository} target="_blank"><p>Repository</p></a>
            </div>
            <img src={proyectsPath + proyect.Icon.NameImg + proyect.Icon.Extension} />
            <p className="proyectsTitleProyect">{proyect.Name}</p>
            <div className="imagesProyectsDisplay">
                <img src={proyectsPath + proyect.ImagesDisplay.Desktop} />
                <img src={proyectsPath + proyect.ImagesDisplay.Tablet} />
                <img src={proyectsPath + proyect.ImagesDisplay.Mobile} />

            </div>
            <p className="proyectsDescriptionProyect">{proyect.Description}</p>
            <div className="proyectsTecProyect">
                {
                    proyect.Technologies.map((tech) =>
                        // <img src={technologies("./"+tech.NameImg+tech.Extension)} />
                        <SkillImageComponent img={"./public/img/skills/"+tech.NameImg+tech.Extension} text={tech.Name}/>
                    )
                }
            </div>
        </div>
    )
}
export default ProyectComponent;