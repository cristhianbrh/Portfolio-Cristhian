import "./ContactSection.css";
import InputComponent from "../../input/InputComponent";

const ContactSection = ({visorRef}) => {
    return (
        <section className="contact" id="appSection4" ref={visorRef}>
            <div className="sendMessage">
                <p>Contact me</p>
                <form>
                    <InputComponent
                        textSpan="FullName"
                        typeInput="text" />
                    <InputComponent
                        textSpan="BussineName"
                        typeInput="text" />
                    <InputComponent
                        textSpan="Email"
                        typeInput="email" />
                    <InputComponent
                        textSpan="Telephone"
                        typeInput="text"
                        inputPattern="[0-9]{3,}" />
                    <textarea name="ll" placeholder="Message" id="" cols="30" rows="10"></textarea>
                    <button>Enviar</button>
                </form>
            </div>
            {/* <div className="socialMedia">

                </div> */}
        </section>
    )
}
export default ContactSection;