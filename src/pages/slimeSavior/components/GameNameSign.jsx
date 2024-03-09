import nameSign from "../sources/nameSign1.png";
import slimeText from "../sources/slimeText.gif";
import savior from "../sources/savior.gif";

import styles from"../styleSheets/GameNameSign.module.scss";  
import { animate, delay, motion } from "framer-motion";


export default function NameSign(){

    
    

    return(   
        <div             
            className={styles.nameSignContainer}   
        >
            
            <div
                className={styles.gameNameContainer}
            >
                <motion.img
                    className={styles.slimeText}
                    src={slimeText}
                    alt="slimeText"
                    animate={{ y:[-310, 0,-10 ,0]  }}
                    transition={{ delay:1.6, duration: 2.8 }}
                />

                <motion.img
                    className={styles.savior}
                    src={savior}
                    alt="savior"
                    animate={{ y:[-310, 0,-10 ,0]  }}
                    transition={{ delay:1.4, duration: 2.8 }}
                />
                
                
            </div>
            <motion.img
                className={styles.sign}
                src={nameSign}
                alt="name-sign"
                animate={{ y:[-310, 0,-10 ,0]  }}
                transition={{ delay:1.2, duration: 2.8 }}
            />
            

            
            
        </div>
    ) 
        
}