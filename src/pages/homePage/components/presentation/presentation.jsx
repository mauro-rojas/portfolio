import styles from "../../styles/presentation.module.scss"
import presentationBackground from "../../assets/presentationBackground.png";
import presentationBackground2 from "../../assets/presentationBackground2.png";
import logo from "../../assets/logo.png"
import trapecio from "../../assets/trapecio.png"
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import AboutmeModal from "./components/aboutmeModal.jsx";




function Presentation({ projectsDisplayRef, contactmeRef }){

    
    // const [aboutmeOpen, setAboutmeOpen] = useState(false);     
    
    // const AnimatedButton = ({text, onClick,}) => {        
        //     return (        
            //         <motion.button
            //             whileHover={{ 
                //                 scale: 1.1,
                //                 border: "1px solid #ffffff",   
                //                 color: "#ffffff",
                //                 backgroundColor: "#400161",
                //                 boxShadow: "none",                         
                //             }}
                //             whileTap={{ scale: 0.9 }} 
                //             transition={{ ease: "easeInOut", duration: 0.2 }}
                //             onClick={onClick}                        
                //         >
                //             {text}
                //         </motion.button> 
                //     );
                // }


    //nuevo diseño            
    const floatingMainInfoContainerRef = useRef(null);


    function rotateElement(event, element){
        event.stopPropagation();
        //posicion relativa del mouse en el div
        const divRect = floatingMainInfoContainerRef.current.getBoundingClientRect();
        const x = event.clientX - divRect.left;
        const y = event.clientY - divRect.top;
        console.log(x, y);
        //centro del div
        const middleX = floatingMainInfoContainerRef.current.clientWidth / 2;
        const middleY = floatingMainInfoContainerRef.current.clientHeight / 2;
        console.log(middleX, middleY);

        //porcentaje de la posicion respecto del centro 
        const offsetX = ((middleX - x ) / middleX) * 6;
        const offsetY = ((middleY - y ) / middleY) * 10;
        console.log(offsetX, offsetY);
        
        // Modifica las variables CSS utilizando setProperty()
        floatingMainInfoContainerRef.current.style.setProperty("--rotateX", offsetY + "deg");
        floatingMainInfoContainerRef.current.style.setProperty("--rotateY", -offsetX + "deg");
        
        // Aplica la transformación con las nuevas variables y saco la transition
        floatingMainInfoContainerRef.current.style.setProperty("transform", `perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY))`);
        floatingMainInfoContainerRef.current.style.transition = "transform 0s ease";
    }

    function handleMouseLeave(){
        floatingMainInfoContainerRef.current.style.transition = "transform 0.5s ease";
        floatingMainInfoContainerRef.current.style.setProperty("transform", "none");
        console.log("salgo");
    }

    return (    
        <>  
            {/* <div className={styles.presentationContainer}>
                <img className={styles.presentationBackground} src={presentationBackground} alt="background" />  
                <AboutmeModal
                    aboutmeOpen = {aboutmeOpen} 
                    setAboutmeOpen = {setAboutmeOpen}
                />
                <div className={styles.presentationText}>  
                    <h1>Cada universo </h1>
                    <h1>comienza con </h1>
                    <h1>una idea</h1>
                    <div className={styles.subtitle}>
                        <h2>Mauro Rojas</h2>
                        <h2>Frontend Developer.</h2>
                    </div>                
                    </div>  
                    <div className={styles.buttonsContainer}>
                        <AnimatedButton
                            text="Sobre mí"
                            onClick= {() => setAboutmeOpen(true)}
                        ></AnimatedButton>
                        <AnimatedButton
                            text="Mis proyectos"
                            onClick= {() => {
                                projectsDisplayRef.current?.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }}
                        ></AnimatedButton>
                        <AnimatedButton
                            text="Contáctame"
                            onClick= {() => {
                                contactmeRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "end"
                                })
                            }}
                        ></AnimatedButton>
                </div>
            </div>  */}



            <div className={styles.presentationContainer}>
                <img className={styles.presentationBackground2} src={presentationBackground2} alt="background" />  
                <div 
                    className={styles.floatingMainInfoContainer} 
                    ref={floatingMainInfoContainerRef}
                    onMouseMove={rotateElement}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={logo} alt="logo" />
                    </div>
                    <div className={styles.aboutmeTextContainer}>
                        <p>
                            Soy un estudiante de licenciatura en sistemas y web
                            developer, me apasiona aprender y mejorar mis habilidades en el
                            desarrollo de software para dar soluciones eficaces trabajando en
                            equipo o de manera independiente.
                        </p>
                        <p>
                            Si bien me enfoco en el desarrollo web, como disfruto y me divierte
                            aprender nuevas tecnologías además de abordar desafíos, me
                            mantengo flexible y receptivo a nuevas oportunidades de
                            crecimiento y desarrollo profesional.
                        </p>
                    </div>
                    <div className={styles.contactmeButtonContainer}>
                        <button
                            onClick= {() => {
                                contactmeRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "end"
                                })
                            }}
                        >
                            Contáctame
                        </button>
                        <img className = {styles.trapecio} src={trapecio}></img>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Presentation;