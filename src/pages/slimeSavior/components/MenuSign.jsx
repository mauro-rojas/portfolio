import styles from "../styleSheets/MenuSign.module.scss"
import {   motion } from "framer-motion"
import { useState } from "react";
import slimeDecoration from "../sources/gif-slime-decoration.gif"

export default function MenuSign({image, delay, name, handleClick,handleonMouseOver, handleonMouseOut, xInitial, yInitial}){
    
    
    
    
    const[isSelected, setIsSelected] = useState(false);

    const variants = {
        noSelected:{opacity:0, x:-150 },
        selected:{opacity:1, x:0 }
    }

    return(
        <div 
            className={styles[`${name}Container`]}
            
        >
        
            <motion.img // cuando paso el mouse por encima de los botones aparece slime al lado
                className={styles.decorationOfSelected}
                src={slimeDecoration}
                alt="slime-decoration"
                animate={isSelected ? "selected" : "noSelected" }                
                variants ={variants}
            />
                    
            
            <motion.div 
                className={styles[`${name}SignContainer`]} 
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale:1.1 }}
                
            >
                <motion.img // img opcion del menu
                    className={styles[`${name}Sign`]}
                    src={image}
                    alt={`${name}-sign`}
                    initial={{x:xInitial, y:yInitial}}
                    animate={{x:0, y:0}}
                    transition={{
                        type:"spring", 
                        delay:delay, 
                        duration:0.8, 
                        bounce:0.2             
                    }}
                    onMouseOver = {()=>{setIsSelected(handleonMouseOver)}}
                    onMouseOut = {()=>{setIsSelected(handleonMouseOut)}}
                    onClick = {()=>handleClick()}
                    
                    
                    
                />
                        
                
            </motion.div>        
            
        </div>   
    )
}
