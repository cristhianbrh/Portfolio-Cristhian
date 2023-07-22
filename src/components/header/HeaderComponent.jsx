import "./HeaderComponent.css";
import myIcon from './../../sources/img/logo/logo.ico'

const HeaderComponent = ({optionAct, locationSection, sections}) => {
    

    const styleOption = [{
        color: "#aba6a6",
        fontWeight: 500,
        transition: "all 0.5s"
    },
    {
        color: "#FFFFFF",
        fontWeight: "bold",
        transition: "all 0.5s"
    }]

    // const observerSection = new IntersectionObserver((entries)=>{
    //     entries.forEach((entry=>{
    //         if(entry.isIntersecting){
    //             console.log(entry.target.id);
    //         }
    //     }))
    // });
    
    

    return (
        <header className="HeaderComponent-class">
            <nav>

                <img src={myIcon} alt="Lol" />

                <div>
                    {sections.map((section, num) => {
                        
                        return(<>
                            <a key={"sections_"+num} onClick={()=>locationSection(num)}
                                style={(optionAct===num)?styleOption[1]:styleOption[0]}>{section}</a>
                            {(num + 1 < sections.length) ? (<span >|</span>) : null}
                        </>)}
                    )}
                </div>
            </nav>
        </header>
    )
    
}
export default HeaderComponent;