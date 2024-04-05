import styles from "../../styles/presentation.module.scss"

import presentationBackground from "../../assets/presentationBackground.png";
import alienSticker from "../../assets/alienStickers/alienSticker18.png"

import { motion } from "framer-motion"
import { useState } from "react";
import AboutmeModal from "./components/aboutmeModal.jsx";




function Presentation({ projectsDisplayRef, contactmeRef }){

    
    const [aboutmeOpen, setAboutmeOpen] = useState(false);     
    
    const AnimatedButton = ({text, onClick,}) => {        
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
            <div className={styles.presentationContainer}>
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
            </div> 
        </>
    )
}

export default Presentation;