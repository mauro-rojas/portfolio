import styles from "../../styles/landingPage.module.scss"

import landingPageBackground from "../../assets/landingPageBackground.png";

import { motion } from "framer-motion"


const AnimatedButton = ({text}) => {
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
            transition={{ ease: "easeOut", duration: 0.1 }}
        >
            {text}
        </motion.button> 
    );
}

function LandingPage(){

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
                        <AnimatedButton
                            text="Sobre mí"
                        ></AnimatedButton>
                        <AnimatedButton
                            text="Mis proyectos"
                        ></AnimatedButton>
                        <AnimatedButton
                            text="Contáctame"
                        ></AnimatedButton>
                </div>
            </div> 
        </>
    )
}

export default LandingPage;