import background from "../sources/background.gif";
import styles from "../styleSheets/Background.module.scss";
import { motion } from "framer-motion"

export default function Background(){

    

    return(
        <motion.div
            className={styles.backgroundContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0,0.4, 0.6,0.9, 1] }}
            transition ={{duration:2}}
        >
            <img src={background}
                 alt="game-background"
            />
        </motion.div>
    )
}