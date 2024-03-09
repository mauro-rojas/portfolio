import styles from "../../styles/projectCard.module.scss"
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useAnimate, useInView } from "framer-motion"
import { useEffect } from "react";

function ProjectCard ({text, img, linkTo, altImg, technologies}){

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    const animateIn = {
        y: -50,
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut", delay: 3  }
    };

    useEffect(() => {
        if (isInView) {
            animate(scope.current, animateIn)
        }
    }, [isInView])

    return(<>
        <div className={styles.projectCardContainer}>

            <div className={styles.projectCardCoreInfo}>
                <p>{text}</p>
                <Link to={linkTo} target='_blank'>
                    <motion.img src={img} alt={altImg} ref={scope}
                        initial={{ opacity: 0, y: -1000  }}
                        // whileInView={{ opacity: 1, y:0}}   
                        // transition={{ ease: "easeOut", duration: 3 }}
                    />
                </Link>
            </div>
            <div className={styles.technologies}>
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