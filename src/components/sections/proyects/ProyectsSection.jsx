import { useState } from "react";
import ImagesViewComponent from "../../ImagesView/ImagesViewComponent";
import ProyectComponent from "../../Proyect/ProyectComponent";
import "./ProyectsSection.css";
import jsonProyects from "./ProyectsValue.json";

const ProyectsSection = ({ visorRef }) => {
    const [imgComplete, setImgComplete] = useState(false);
    const [proyectActView, setProyectActView] = useState(jsonProyects.Proyects[0]);

    return (
        <section style={{position:"relative"}} className="proyects" id="appSection3" ref={visorRef}>
            <p>My proyects</p>
            <div >
                <div>
                    {
                        jsonProyects.Proyects.map((proyect, index) =>
                             <ProyectComponent proyect={proyect} setProyectActView={setProyectActView} key={proyect.Name + index} setImgComplete={setImgComplete}/>
                        )
                    }
                    <ImagesViewComponent proyect={proyectActView} imgComplete={imgComplete} setImgComplete={setImgComplete}/>
                </div>
            </div>
        </section>
    )
}
export default ProyectsSection;