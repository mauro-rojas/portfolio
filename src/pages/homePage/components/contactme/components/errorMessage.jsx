import styles from "../styles/errorMessage.module.scss"

import { AnimatePresence, motion } from 'framer-motion';

function ErrorMessage ({specificError}){
    return(
        <AnimatePresence>     
            {
                specificError &&
                <motion.div 
                    className={styles.errorMessage}
                    initial={{opacity:  0, y: -20}}
                    animate={{opacity:  1, y: 0}}
                    transition={{duration: 0.2, type: "spring",  stiffness: 200, damping: 11}}
                    exit={{
                        opacity:  0, y: -20,
                        transition: { duration: 0.2, type: "spring", stiffness: 200, damping: 15 },
                    }}
                >
                    {specificError}
                </motion.div>
            }
        </AnimatePresence>  
    )
}

export default ErrorMessage;