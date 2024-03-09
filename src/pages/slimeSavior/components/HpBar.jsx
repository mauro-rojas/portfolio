
import styles from "../styleSheets/HpBar.module.scss"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

import hpBar from "../sources/hpBar.png"

export default function HpBar({ hpValue }){
    
    
    
    const healthBar =useRef(null);

    useEffect(()=>{
        healthBar.current.style.width = `${hpValue}%`;
    },[hpValue]);

    const healthBarShadow =useRef(null);

    useEffect(()=>{
        healthBarShadow.current.style.width = `${hpValue}%`;
    },[hpValue]);
    
 

    return(
        <motion.div 
            className={styles.hpBarContainer}
            initial={{y:-1500}}
            animate={{y:0}}
            transition={{
                type: "spring",
                bounce: 0.2,
                delay:0.5,
                duration: 1.3,
                
            }}
        >
           
            <motion.img
                className={`${styles.hpBar} ${styles.initial}`}
                src={hpBar}
                alt="hp-bar"
                initial={{scale:0.5}}
                animate={{scale:1}}
                transition={{delay:1.2 ,duration:1.3}}
            />
            

            <motion.div
                className={styles.healthContainer}
                initial={{scale:0.5 }}
                animate={{scale:1}}
                transition={{delay:1.2 ,duration:1.3}}
            >
                <div
                    className={
                        (hpValue>60) ?
                            `${styles.fullHp}`
                        :
                            (hpValue>30) ?
                                `${styles.halfHp}`
                            :
                                `${styles.lowHp}`
                    }
                    ref={healthBar}
                >
                </div>

                <div
                    className={styles.healthShadow}
                    ref={healthBarShadow}
                ></div>

            </motion.div>
            
        </motion.div>
    )
}