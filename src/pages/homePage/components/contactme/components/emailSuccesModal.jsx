import styles from "../styles/emailSuccesModal.module.scss"

import { AnimatePresence, motion } from "framer-motion";

import alienSticker from "../../../assets/alienStickers/alienSticker22.png"


function EmailSuccesModal ({ succesEmail, setSuccesEmail }){

    return (
        <AnimatePresence>     
            {succesEmail &&       
            <motion.div className={styles.succesEmail}
                initial={{                                   
                    backgroundColor: "#400161",
                    position: "fixed",
                    zIndex:"-2",
                    clipPath: "circle(0% at 100% 0%)"
                
                }}
                animate={{
                    position: "fixed",
                    zIndex: "3",
                    clipPath: "circle(100% at 100% 50%)",
                        
                }}
                transition={{ duration: .4, delay: 0, type: "spring", stiffness:100, damping:15  }}
                exit={{
                    clipPath: "circle(0% at 100% 0%)",
                    transition: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 },
                }}
            >
                <motion.button
                    whileHover={{ 
                        scale: 1.1,
                        border: "1px solid #ffffff",   
                        color: "#ffffff",
                        backgroundColor: "#400161",
                        boxShadow: "none",                         
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSuccesEmail(false) }
                >
                    X
                </motion.button>
                <h1>Email enviado correctamente !!</h1> 
                <img className={styles.alienSticker} src={alienSticker} alt="alienSticker" />       
            </motion.div>
            }                
        </AnimatePresence>
    );

}


export default EmailSuccesModal;