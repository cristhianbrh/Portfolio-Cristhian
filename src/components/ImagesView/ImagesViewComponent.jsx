import { useEffect, useState } from 'react'
import './ImagesViewComponent.css'
const ImagesViewComponent = ({ proyect, imgComplete, setImgComplete }) => {
    const [actImg, setActImg] = useState(0);
    const types = Object.keys(proyect.ImagesDisplay);

    const restriccion = (act) => {
        if (act < 0) act = types.length - 1;
        else if (act >= types.length) act = 0;
        setActImg(act);
    }

    // let interval = "";
    // useEffect(()=>{
    //     interval = setInterval(()=>{restriccion(actImg - 1)}, 5000);
    // }, [])

    const pathImages = {
        proyectsPath: "./public/img/Proyects/",
        logoImg: "./public/img/Proyects/PortfolioLogo.png",
        backgrounds: {
            Desktop: {
                Path: "./public/img/devices/Desktop.png",
                StyleBorderImage: {
                    borderTopWidth: "50px",
                    borderTopStyle: "solid",
                    borderImageSource: 'url(./public/img/devices/Desktop.png)',
                    borderImageSlice: "100%",
                    borderImageRepeat: "stretch",
                    borderImageWidth: "56px 100% 0 0"
                }
            },
            Tablet: {
                Path: "./public/img/devices/Tablet.png",
                StyleBorderImage: {
                    borderWidth: "30px",
                    borderStyle: "solid",
                    borderImageSource: 'url(./public/img/devices/Tablet.png)',
                    borderImageSlice: "8% 6% 7% 5%",
                    borderImageRepeat: "stretch",
                    borderImageWidth: "33px",
                    borderRadius: "20px"
                }
            },
            Mobile: {
                Path: "./public/img/devices/Mobile.png",
                StyleBorderImage: {
                    borderWidth: "18px 15px 16px 15px",
                    borderImageSource: 'url(./public/img/devices/Mobile.png)',
                    borderImageSlice: "2% 4% 3.5% 4% fill",
                    borderImageRepeat: "initial",
                    borderImageWidth: "18px 15px 16px 15px",
                    borderStyle: "solid",
                    borderRadius: "42px"
                }
            }
        }
    }

    return (
        <div className="ImagesViewComponent" style={{display: imgComplete ? "flex" : "none" }}>

            <div className="ImagesViewComponent_Carrousel">
                {/* <img src={pathImages.backgrounds[types[actImg]]} alt="none" className="ImagesViewComponent_Carrousel_type" /> */}
                <img src={pathImages.proyectsPath + proyect.ImagesDisplay[types[actImg]]}
                    style={pathImages.backgrounds[types[actImg]].StyleBorderImage}
                    alt="none" className='ImagesViewComponent_Carrousel_proyect' />
                <div className='ImagesViewComponent_Carrousel_logo ImagesViewComponent_Carrousel_Cont' onClick={()=>{window.open(proyect.Website)}}>
                    <img src={pathImages.logoImg} alt="none" />
                </div>
                <div className='ImagesViewComponent_Carrousel_github ImagesViewComponent_Carrousel_Cont' onClick={()=>{window.open(proyect.Repository)}}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </div>
                <div className='ImagesViewComponent_Carrousel_imageAct'>
                    {
                        types.map((imagesA, index) =>
                            <span className='ImagesViewComponent_Carrousel_imageAct_indexImgCircle' key={"ImagesViewComponent_span_"+index} style={{
                                width: "10px",
                                height: "10px",
                                border: "#fff solid 2px",
                                borderRadius: "50%",
                                cursor: "pointer",
                                backgroundColor: (index == actImg) ? "#fff" : ""
                            }} />)
                    }
                </div>
            </div>
            <div className="ImagesViewComponent_retro ImagesViewComponent_svg" onClick={() => restriccion(actImg - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
            </div>
            <div className="ImagesViewComponent_av ImagesViewComponent_svg" onClick={() => restriccion(actImg + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
            </div>
            <svg className="ImagesViewComponent_close" onClick={() => setImgComplete(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
            </svg>
        </div>
    )
}
export default ImagesViewComponent