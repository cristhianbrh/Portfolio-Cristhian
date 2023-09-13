import "./ContactSection.css";
import InputComponent from "../../input/InputComponent";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react";
import Swal from "sweetalert2";

const ContactSection = ({ visorRef }) => {
    const form = useRef();
    
    const [isRecaptchaGood, setIsRecaptchaGood] = useState(false);
    const [inputFullName, setInputFullName] = useState("");
    const [inputBussineName, setInputBussineName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputTelephone, setInputTelephone] = useState("");

    const envForm = (e) => {
        e.preventDefault();

        // const templateParams = {
        //     name: inputFullName,
        //     businessName: inputBussineName,
        //     email: inputEmail,
        //     telephone: inputTelephone,
        // };


        emailjs.sendForm(import.meta.env.VITE_ENV_EMAILJS_service,
            import.meta.env.VITE_ENV_EMAILJS_template,
            form.current,
            import.meta.env.VITE_ENV_EMAILJS_public
        ).then((result) => {
            Swal.fire({
                title: "Mensaje enviado",
                text: "Su mensaje se envió correctamente",
                icon: "success",
                confirmButtonText: "Ok"
            })
            // console.log(result.text)
        }, (error) => {
            Swal.fire({
                title: "Error al enviar mensaje",
                text: "Su mensaje no se ha enviado correctamente",
                icon: "error",
                confirmButtonText: "Ok"
            })
            console.log(error.text)
        })
    }



    return (
        <section className="contact" id="appSection4" ref={visorRef}>
            <div className="sendMessage">
                <p>Contact me</p>
                <form ref={form} onSubmit={envForm}>
                    <InputComponent
                        textSpan="FullName"
                        typeInput="text"
                        name="name"
                        onChangeValue={inputFullName}
                        onchangeMethod={setInputFullName} />
                    <InputComponent
                        textSpan="BussineName"
                        typeInput="text"
                        name="businessName"
                        onChangeValue={inputBussineName}
                        onchangeMethod={setInputBussineName} />
                    <InputComponent
                        textSpan="Email"
                        typeInput="email"
                        name="email"
                        onChangeValue={inputEmail}
                        onchangeMethod={setInputEmail} />
                    <InputComponent
                        textSpan="Telephone"
                        typeInput="text"
                        name="telephone"
                        inputPattern="[0-9]{3,}"
                        onChangeValue={inputTelephone}
                        onchangeMethod={setInputTelephone} />
                    <textarea name="message"  placeholder="Message" id="" cols="30" rows="10" required></textarea>
                    <ReCAPTCHA className="g-recaptcha" sitekey={import.meta.env.VITE_ENV_RECAPTCHA} onChange={() => setIsRecaptchaGood(!isRecaptchaGood)}></ReCAPTCHA>
                    {isRecaptchaGood && <button>Enviar</button>}
                </form>
            </div>
            {/* <div className="socialMedia">

                </div> */}
        </section>
    )
}
export default ContactSection;