import { useRef, useState } from "react";
import "./SkillImageComponent.css";
const SkillImageComponent = ({ img, text}) => {
    const [inHover, setInHover] = useState(false);
    return (
        <div className="SkillImageComponent" onMouseOver={() => { if(!inHover){setInHover(true)} }} onMouseLeave={() => { if(inHover){setInHover(false)} }}>
            <img src={img} className={"SkillImageComponentImg" + ((inHover) ? " SkillImageComponentImg__Active" : "")} alt={text} />
            <span className={"SkillImageComponentSpan" + ((inHover) ? " SkillImageComponentSpan__Active" : "")}>{text}</span>
        </div>
    )
}
export default SkillImageComponent;