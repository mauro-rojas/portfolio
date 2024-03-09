import styles from "../styleSheets/Rules.module.scss"
import buttonCloseUP from "../sources/buttonCloseUp.png"
import buttonCloseDown from "../sources/buttonCloseDown.png"
import hachuela from "../sources/hachuela1.png"
import licuadora from "../sources/licuadora.png"

import {motion, spring} from "framer-motion"
import { useState } from "react"



export default function Rules({filterOn, rulesContentOn}){

    const [crossIcon, setCrossIcon] = useState(true)

    return(
        <motion.div 
            className={styles.rules}
            initial={{x:-500, y:200, scale:0}}
            animate={{x:0, y:0, scale:1}}            
            transition={{type:"spring", duration:1}}
        >



            <motion.img    
                className={styles.closeButton}
                src={crossIcon ? buttonCloseUP: buttonCloseDown}
                alt="button close"
                onClick={()=>{filterOn(false);
                            rulesContentOn(false);                
                }}
                whileHover={{scale:[1, 1.5, 1],rotate:0}}
                whileTap={()=>setCrossIcon(!crossIcon)}
                animate={{scale:[1, 1.5, 1],
                          rotate:360
                }}
                transition={{delay:0.2, duration:1}}
            />
            
            
            <p className={styles.rulesText}>
                Nuestro slime es muy glotón y debemos alimentarlo encontrando sus alimentos favoritos. <br/> <br/>
                Contamos con fichas las que tendremos que dar vuelta hasta encontrar todos los pares, pero cuidado, si  
                no encontremos alimentos iguales el slime recibirá daño. <br/> <br/>
                Además, dentro de las fichas hay algunos objetos especiales que aparecen 4 veces y  tienen efectos negativos. <br/> <br/>
                <div className={styles.especialText}>
                    <img src={licuadora} alt="licuadora"/> 
                    <p> Licuadora: Al encontrar uno, siempre queda visible y al encontrar los 4 mezclará todas las fichas.</p>  
                    
                </div>
                <br/>
                <div className={styles.especialText}>
                    <img src={hachuela} alt="hachuela"/> 
                    <p> Hachuela: Al encontrar 2 el slime recibirá mucho daño.</p> 
                    
                </div>
                
                    
                
            </p>
        </motion.div>
    )
}