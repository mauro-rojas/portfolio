import styles from "../styleSheets/Slime.module.scss"
import slimeHighHp from "../sources/Slime/slimeFullhp.gif"
import slimeIdle from "../sources/Slime/slimeIdle.gif"
import slimeDmg from "../sources/Slime/slimeDmg.gif"
import slimeDeath from "../sources/Slime/slimeDeath.gif"
import slimeWin from "../sources/Slime/slimeWin.gif"
import { motion } from "framer-motion"

export default function Slime({ hpValue , win}){


    

    return(
        <motion.div
            className={styles.slimeContainer}
            initial={{x:-700}}
            animate={{x:0}}
            transition={{
                type: "spring",
                bounce: 0.1,
                duration: 0.9,
                delay:1.5
            }}
        >
            <img
                className={styles.slime}
                src={
                    (win) ?
                        slimeWin
                    :
                        (hpValue>=75) ?
                            slimeHighHp
                        :
                            (hpValue>30) ?
                                slimeIdle
                            :
                                (hpValue!== 0) ?
                                    slimeDmg
                                :
                                    slimeDeath
                        
                       
                }
                alt="slime"
            />
        </motion.div>
    )
}