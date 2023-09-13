import { useEffect, useState } from "react";
import "./InputComponent.css"
const InputComponent = ({textSpan, typeInput, inputPattern, onchangeMethod, onChangeValue, name})=>{
    // const [valueText, setValueText] = new useState("");
    
    return(
        <div className="InputComponentClass">
            <input type={typeInput} onChange={(e)=>onchangeMethod(e.target.value)} name={name}
                className="InputComponentClass_input"  required pattern={inputPattern}/>
            <span className={"InputComponentClass_span" + ((onChangeValue.length != 0)?" InputTextMin":"")}>{textSpan}</span>
        </div>
    )
}
export default InputComponent;