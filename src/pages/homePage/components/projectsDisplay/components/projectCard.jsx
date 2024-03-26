import styles from "../styles/projectCard.module.scss"
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useAnimate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";

function ProjectCard ({text, img, linkTo, altImg, technologies, syncAnimation  }){

    const [seen, setSeen] = useState(false);

    const inViewRef = useRef(null);
    const imgRef = useRef(null);
    const linkRef = useRef(null);
    const isInView = useInView(inViewRef, { once: true });    

    const animateIn = {
        opacity: 1,
        y: -37
    };

    useEffect(() => {
        
        if ((!seen) && (isInView)) {
            console.log("se vio");
            setSeen(true);
            if(linkRef.current){
                linkRef.current.style.pointerEvents = "unset";
            }                    
        }
        
    }, [isInView]);


    

    return(<>
        <div className={styles.projectCardContainer}>
            <div className={styles.projectCardCoreInfo}>
                <p>{text}</p>
                <Link to={linkTo} target='_blank' ref={linkRef} style={{ pointerEvents: 'none' }}>
                    <motion.img src={img} alt={altImg} ref={imgRef}
                        initial={{ 
                            y: -1000,
                            boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.6)",
                            opacity: 0
                        }}
                        animate={seen ? animateIn  : {}}                        
                        transition={{ duration: 1, type: "spring", stiffness: 75, damping: 12 }}
                        onAnimationComplete={() => {
                            //console.log('Completed animating');
                            if(imgRef.current){
                                imgRef.current.classList.add(styles.bounceAnimation);   
                                // Guarda el valor original de la propiedad animation
                                const computedStyle = window.getComputedStyle(imgRef.current);
                                const originalAnimation = computedStyle.getPropertyValue('animation');
                                // console.log({originalAnimation});
                                // // Desactiva la animación
                                // imgRef.current.style.animation = "none";

                                // // Para restaurar la animación a su valor original
                                // imgRef.current.style.animation = originalAnimation;   
                                syncAnimation(imgRef, originalAnimation);                          
                            }
                        }}                                                
                    />
                </Link>
            </div>
            <div className={styles.technologies} ref={inViewRef}>
                {technologies ? 
                    ( technologies.map((tech, index) => (
                        <img key={index} src={tech.imageUrl} title={tech.name}  alt={`Imagen ${index + 1}`} />
                    )))
                    :
                    <></>
                }
            </div>
        </div>

    </>)
}

export default ProjectCard;