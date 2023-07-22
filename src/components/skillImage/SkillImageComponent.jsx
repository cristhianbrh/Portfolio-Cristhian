import { useRef, useState } from "react";
import "./SkillImageComponent.css";
const SkillImageComponent = ({ img, text}) => {
    const [inHover, setInHover] = useState(false);
    return (
        <div className="SkillImageComponent" onMouseOver={() => { if(!inHover){setInHover(true)} }} onMouseLeave={() => { if(inHover){setInHover(false)} }}>
            <span className={"SkillImageComponentSpan" + ((inHover) ? " SkillImageComponentSpan__Active" : "")}>{text}</span>
            <img src={img} className="SkillImageComponentImg" alt={text} />
        </div>
    )
}
export default SkillImageComponent;