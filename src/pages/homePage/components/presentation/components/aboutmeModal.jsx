import styles from "../styles/aboutmeModal.module.scss"

import { AnimatePresence, motion } from "framer-motion"

import alienSticker from "../../../assets/alienStickers/alienSticker18.png"

function AboutmeModal ({aboutmeOpen , setAboutmeOpen}){

    return (
        <>
            <AnimatePresence>
                {
                    aboutmeOpen &&                    
                    <motion.div className={styles.aboutmeModal}
                        initial={{                                   
                            // backgroundColor: "#400161",
                            // position: "fixed",
                            // top: 0,
                            // left: 0,
                            // zIndex:"-2",
                            clipPath: "circle(0% at 0% 0%)"
                            
                        }}
                        animate={
                            aboutmeOpen  ? {
                                // position: "fixed",
                                // top: 0,
                                // left: 0,
                                ///zIndex: "3",
                                clipPath: "circle(68% at 0% 50%)",                                
                            } : 
                            {}
                        }
                        transition={{ duration: .4, delay: 0, type: "spring", stiffness:100, damping:15  }}
                        exit={{
                            clipPath: "circle(0% at 0% 0%)",
                            transition: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 },
                        }}
                    >
                        <motion.button
                            whileHover={{ 
                                scale: 1.1,
                                border: "1px solid #ffffff",   
                                color: "#ffffff",
                                backgroundColor: "#400161",                         
                            }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ ease: "easeInOut", duration: 0.2 }}
                            onClick= {() => setAboutmeOpen(false)}
                        >
                            X
                        </motion.button>
                        <div className={styles.aboutmeText}>
                            <h1>Hola a todos !!</h1>
                            <p>
                                Soy un estudiante de licenciatura en sistemas aspirante a full stack
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
                        <img className={styles.alienSticker} src={alienSticker} alt="alienSticker" />
                    </motion.div> 
                }
            </AnimatePresence>
        </>               
    );
}

export default AboutmeModal;