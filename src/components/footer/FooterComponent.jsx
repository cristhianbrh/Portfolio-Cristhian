import "./FooterComponent.css";
import socialMedia_youtube from "./../../sources/img/socialMedia/youtube-Icon.png";
import socialMedia_gmail from "./../../sources/img/socialMedia/gmail-Icon.png";
const FooterComponent = () => {
    return (
        <footer>
            {/* <div>
                <p>Redes sociales:</p>
                <img src={socialMedia_youtube} alt="YouTube" />
            </div> */}
            <div>
                <p>@cristhianbrh</p>
            </div>
            {/* <div>
                <p>Contáctame:</p>
                <img src={socialMedia_gmail} alt="Gmail" />
            </div> */}
        </footer>
    )
}
export default FooterComponent;