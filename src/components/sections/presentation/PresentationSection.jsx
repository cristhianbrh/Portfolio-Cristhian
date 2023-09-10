import "./PresentationSection.css";
import languagePage from "./../../../sources/language/languagePage.json"
import { useContext } from "react";
import { LanguageF } from "../../../hooks/ContextLanguage";
import contactInfo from "../../../sources/info/contact.json"

const PresentationSection = ({ visorRef }) => {
    const {language} = useContext(LanguageF)
    
    const tag = "FullStack";
    const atributos = [
        {
            atrib: languagePage.Presentation[language].presentationText[0],
            value: languagePage.Presentation[language].presentationText[1]
        },
        {
            atrib: languagePage.Presentation[language].presentationText[2],
            value: ((new Date().getFullYear()) - 2004)
        },
        {
            atrib: languagePage.Presentation[language].presentationText[3],
            value: languagePage.Presentation[language].presentationText[4]
        }
    ]
    const profileImg = 'img/profile/profile.jpg';

    return (
        <section className="presentation" id="appSection0" ref={visorRef}>
            <div className="presentationImgs">
                <div className="presentationImgSvgCont">
                    <a href={contactInfo.github} target="_blank">
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                            <path  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg> {/* svg obtenida de la página oficial de github */}
                    </a>
                    <a href={contactInfo.linkedin} target="_blank">
                        <svg viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"  width="32" focusable="false">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg> {/* svg obtenida de la página oficial de LinkedIn */}
                    </a>
                    <a>
                        <svg viewBox="0 0 24 24" aria-hidden="true" >
                            <g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g>
                        </svg> {/* svg obtenida de la página oficial de twiter */}
                    </a>
                </div>
                <img className="presentationImgMe" src={profileImg} alt="No image" />
            </div>
            <div className="presentationText">
                <div>
                    <p>
                        <a style={{ color: "#00ee00" }}>&lt;{tag}</a> &nbsp;
                        <a style={{ color: "#ffff00" }}>{atributos[0].atrib}</a>=
                        <a style={{ color: "#ffa911" }}>"{atributos[0].value}"</a>
                        &nbsp;
                        <a style={{ color: "#ffff00" }}>{atributos[1].atrib}</a>=
                        <a style={{ color: "#ffa911" }}>"{atributos[1].value}"</a>

                        <br />
                        <a style={{ color: "#ffff00" }}>{atributos[atributos.length - 1].atrib}</a>=
                        <a style={{ color: "#ffa911" }}>"{atributos[atributos.length - 1].value}"</a>
                        <a style={{ color: "#00ee00" }}>&nbsp;/&gt;</a>
                    </p>
                </div>
                {/* <p>Hola</p>
                    <p>Mi nombre es Cristhian</p>
                    <p>Soy desarrollador web fullstack</p> */}
            </div>
        </section>
    )
}
export default PresentationSection;