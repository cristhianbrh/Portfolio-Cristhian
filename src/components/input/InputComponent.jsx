import { useEffect, useState } from "react";
import "./InputComponent.css"
const InputComponent = ({textSpan, typeInput, inputPattern})=>{
    const [valueText, setValueText] = new useState("");
    
    return(
        <div className="InputComponentClass">
            <input type={typeInput} onChange={(e)=>setValueText(e.target.value)}
                className="InputComponentClass_input"  required pattern={inputPattern}/>
            <span className={"InputComponentClass_span" + ((valueText.length != 0)?" InputTextMin":"")}>{textSpan}</span>
        </div>
    )
}
export default InputComponent;