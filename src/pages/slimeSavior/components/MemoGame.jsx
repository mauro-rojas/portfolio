import React, { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import styles from "../styleSheets/MemoGame.module.scss"
import hachuela from "../sources/gameTokens/hachuela.png"
import licuadora from "../sources/gameTokens/licuadora.png"
import huevos from "../sources/gameTokens/huevos.png"
import papa from "../sources/gameTokens/papa.png"
import pollo from "../sources/gameTokens/pollo.png"
import queso from "../sources/gameTokens/queso.png"
import sushi from "../sources/gameTokens/sushi.png"
import tocino from "../sources/gameTokens/tocino.png"
import reverso from "../sources/reverse-card.png"

const FOODS = [
    huevos,
    papa,
    pollo,
    queso,
    sushi,
    tocino
].flatMap((food)=>[`a|${food}`, `b|${food}`]);

const LICUADORAS = [
    licuadora
].flatMap((licuadora)=>[`a|${licuadora}`, `b|${licuadora}`,`c|${licuadora}`, `d|${licuadora}`]);

const HACHUELAS = [
    hachuela
].flatMap((hachuela)=>[`a|${hachuela}`, `b|${hachuela}`,`c|${hachuela}`, `d|${hachuela}`]);

const FICHAS = FOODS.concat(LICUADORAS.concat(HACHUELAS)).sort(() => Math.random() - 0.5);

let fichasAnimaciones ={
    hidden :{opacity:0, x:-200, y: -200},
    visible:{opacity:1, x:0, y:0},
    mixed:{
        opacity:1,
        x:0,
        y:0,
        rotate: [0, 1080],
    }
}






export default function MemoGame({curar, dañar, actualHp, setWin, setEndGame}){
    const [guessed, setGuessed] = useState([]);  
    const [selected, setSelected] = useState([]);
    const[licuadoraGuessed, setLicuadoraGuessed] = useState(0);
    const [mixed, setMixed] = useState(false);
    
    // cuando doy vuelta 2 fichas se fija si son iguales
    //suma las licuadoras encontradas sea en la primer ficha o la segunda y si encuentra la agrega 
    //al array de encontrados y resetea los seleccionados
    useEffect(()=>{
        if(selected.length === 1){
            if(selected[0].split("|")[1] === licuadora){ 
                setGuessed((guessed)=>guessed.concat(selected[0]));
                setLicuadoraGuessed((licuadoraGuessed)=>licuadoraGuessed + 1);
            }}
            else if(selected.length === 2){
                if(selected[1].split("|")[1] === licuadora){
                    setGuessed((guessed)=>guessed.concat(selected[1]));
                    setLicuadoraGuessed((licuadoraGuessed)=>licuadoraGuessed + 1);  
                    dañar(10);                  
                }
                else if(selected[0].split("|")[1] === selected[1].split("|")[1]){
                    setGuessed((guessed)=>guessed.concat(selected));
                    if(selected[0].split("|")[1] === hachuela){
                        dañar(30)
                    }
                    else{
                        curar(20)
                    }                    
                }
                else{
                    dañar(10)                    
                }
                const timeOutId = setTimeout(() => setSelected([]), 700);
                return() => clearTimeout(timeOutId);
            }
              
    },[selected]);
    
    //mezclo cuando encuentro las 4 licuadoras
    useEffect(()=>{
        if(licuadoraGuessed === 4){
            FICHAS.sort(() => Math.random() - 0.5);
            setMixed(true);
            const timeOutId = setTimeout(() => setSelected([]), 700);
            return() => clearTimeout(timeOutId);
        } 
    },[licuadoraGuessed]);

    //victoria
    useEffect(()=>{
        if(guessed.length >= 12){
            if((guessed.filter((element)=>(element.split("|")[1] !== licuadora && element.split("|")[1] !== hachuela) ).length) === FOODS.length){
                setTimeout(() => {
                    setWin(true);
                    setEndGame(true);
                    FICHAS.sort(() => Math.random() - 0.5);  //mezclo para un nuevo juego
                }, 1000);
            } 
        }
                            
    }, [guessed]);

    //derrota
    useEffect(()=>{
        if(actualHp === 0){
            setTimeout(() =>{
                 setEndGame(true);
                 FICHAS.sort(() => Math.random() - 0.5);  //mezclo para un nuevo juego
            }, 1000);
        }                    
   }, [actualHp]);

    
    return(
        <motion.ul 
            className={styles.fichasContainer}
        >
            {
                FICHAS.map((ficha, i) => {
                    const [,url] = ficha.split("|"); 
                    console.log(url);
                    return(
                        <motion.li
                            key={ficha}
                            className={styles.ficha}
                            whileTap={{scale:0.9}}
                            whileHover={{scale:1.1}}
                            initial="hidden"
                            animate={`${mixed ? "mixed" : "visible" }`}
                            transition= {{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.5,
                                delay: i*0.1
                            }}
                            variants={fichasAnimaciones}
                            onClick = {()=> {if((selected.length<2)&&(!selected.includes(ficha))&&(!guessed.includes(ficha)))
                                setSelected((selected)=>selected.concat(ficha))
                            }}
                            
                        >
                            {   
                                (selected.includes(ficha)|| guessed.includes(ficha)) ?
                                (<div>
                                    <motion.img                                
                                        className={styles.fichaImagen}
                                        src={url}
                                        alt="game-token"
                                        initial={{ opacity:0.4, scale:0.5}}
                                        animate={{opacity:1, scale:1}}                                    
                                        transition={{duration:0.6}}
                                    />
                                </div>)
                                :
                                (<motion.div
                                    animate={{opacity:[0,1]}}
                                    transition={{duration:0.6}}
                                >
                                    <img                                
                                        className={styles.fichaReverso}
                                        src={reverso}
                                        alt="game-hidden-token"                                   
                                    />
                                </motion.div>)
                            }
                        </motion.li>
                    )
                })
            }
        </motion.ul>
    )
        
    

}