import styles from "../../styles/landingPage.module.scss"

import landingPageBackground from "../../assets/landingPageBackground.png";
import alienSticker from "../../assets/alienStickers/alienSticker18.png"

import { motion } from "framer-motion"
import { useState } from "react";




function LandingPage({ projectsPageRef, contactmeRef}){

    const [aboutmeText, setAboutmeText] = useState("Sobre mí");    
    
    const  variants ={
        open: { opacity: 1},
        closed: { position: "fixed", top: 0, left: 0, opacity: [0,1], zIndex: 4, boxShadow: "none" },
    }
    
    const AnimatedButton = ({text, onClick, variants}) => {
        if(variants){
            return (        
                <motion.button
                    whileHover={{ 
                        scale: 1.1,
                        border: "1px solid #ffffff",   
                        color: "#ffffff",
                        backgroundColor: "#400161",
                        boxShadow: "none",                         
                    }}
                    whileTap={{ scale: 0.9 }} 
                    onClick={onClick}  
                    initial={"open"}
                    animate={aboutmeText === "Sobre mí" ? "open" : "closed"}
                    variants={variants}  
                    transition={{ ease: "easeInOut", duration: 0.2 }}
                                           
                >
                    {text}
                </motion.button> 
            );
        }
        return (        
            <motion.button
                whileHover={{ 
                    scale: 1.1,
                    border: "1px solid #ffffff",   
                    color: "#ffffff",
                    backgroundColor: "#400161",
                    boxShadow: "none",                         
                }}
                whileTap={{ scale: 0.9 }} 
                transition={{ ease: "easeInOut", duration: 0.2 }}
                onClick={onClick}                        
            >
                {text}
            </motion.button> 
        );

    }


    return (    
        <>  
            <div className={styles.landingPageContainer}>
                <img className={styles.landingPageBackground} src={landingPageBackground} alt="background" />  
                <div className={styles.landingPageText}>  
                    <h1>Cada universo </h1>
                    <h1>comienza con </h1>
                    <h1>una idea</h1>
                    <div className={styles.subtitle}>
                        <h2>Mauro Rojas</h2>
                        <h2>Frontend Developer.</h2>
                    </div>                
                    </div>  
                    <div className={styles.buttonsContainer}>
                        <div className={styles.aboutmeBtnAndModalContainer}>
                            <AnimatedButton
                                text= {aboutmeText}
                                onClick= {() => {
                                    setAboutmeText((prev => prev === "Sobre mí" ? "X" : "Sobre mí"))
                                
                                }}
                                variants={variants}
                            ></AnimatedButton>
                            <motion.div className={styles.aboutmeModal}
                                initial={{                                   
                                    backgroundColor: "#400161",
                                    position: "fixed",
                                        top: 0,
                                        left: 0,
                                    zIndex:"-2",
                                    clipPath: "circle(0% at 0% 0%)"
                                   
                                }}
                                animate={
                                    aboutmeText === "X" ? {
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        zIndex: "3",
                                        clipPath: "circle(100% at 0% 50%)",
                                        
                                    } : 
                                    {}
                                }
                                transition={{ duration: .4, delay: 0, type: "spring", stiffness:100, damping:15  }}
                            >
                                <div className={styles.aboutmeText}>
                                    <h1>Hola a todos !!</h1>
                                    <p>
                                        Soy un estudiante de licenciatura en sistemas aspirante a full stack
                                        developer, me apasiona aprender y mejorar mis habilidades en el
                                        desarrollo de software para dar soluciones eficaces trabajando en
                                        equipo o de manera independiente.
                                    </p>
                                    <p>
                                        Si bien aspiro al desarrollo web, como disfruto y me divierte
                                        aprender nuevas tecnologías además de abordar desafíos, me
                                        mantengo flexible y receptivo a nuevas oportunidades de
                                        crecimiento y desarrollo profesional.
                                    </p>
                                </div>
                                <img className={styles.alienSticker} src={alienSticker} alt="alienSticker" />
                            </motion.div>                            
                        </div>
                        <AnimatedButton
                            text="Mis proyectos"
                            onClick= {() => {
                                projectsPageRef.current?.scrollIntoView({
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
            </div> 
        </>
    )
}

export default LandingPage;