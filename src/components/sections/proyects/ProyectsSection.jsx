import ProyectComponent from "../../Proyect/ProyectComponent";
import "./ProyectsSection.css";
import jsonProyects from "./ProyectsValue.json";

const ProyectsSection = ({ visorRef }) => {

    return (
        <section style={{position:"relative"}} className="proyects" id="appSection3" ref={visorRef}>
            <p>My proyects</p>
            <div >
                <div>
                    {
                        jsonProyects.Proyects.map((proyect, index) =>
                             <ProyectComponent proyect={proyect} key={proyect.Name + index}/>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
export default ProyectsSection;