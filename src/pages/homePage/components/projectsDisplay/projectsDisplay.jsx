import styles from "../../styles/projectsDisplay.module.scss"


import weatherProjectView from "../../assets/weatherProjectView.png";
import slimeSaviorProjectView from "../../assets/slimeSaviorProjectView.png";
import enConstruccionImg from "../../assets/enConstruccion.png"

import alienSticker2 from "../../assets/alienStickers/alienSticker2.png"
import alienSticker5 from "../../assets/alienStickers/alienSticker5.png"
import alienSticker7 from "../../assets/alienStickers/alienSticker7.png"
import alienSticker8 from "../../assets/alienStickers/alienSticker8.png"
import alienSticker10 from "../../assets/alienStickers/alienSticker10.png"
import alienSticker12 from "../../assets/alienStickers/alienSticker12.png"
import alienSticker14 from "../../assets/alienStickers/alienSticker14.png"
import alienSticker17 from "../../assets/alienStickers/alienSticker17.png"
import alienSticker19 from "../../assets/alienStickers/alienSticker19.png"
import alienSticker20 from "../../assets/alienStickers/alienSticker20.png"
import alienSticker24 from "../../assets/alienStickers/alienSticker24.png"
import alienSticker28 from "../../assets/alienStickers/alienSticker28.png"
import alienSticker29 from "../../assets/alienStickers/alienSticker29.png"

import javaScriptIcon from "../../assets/technologiesIcons/JavaScript.svg"
import framerMotionIcon from "../../assets/technologiesIcons/framer-motion.svg"
import reactChartjs2Icon from "../../assets/technologiesIcons/react-chartjs-2.svg"
import sassIcon from "../../assets/technologiesIcons/Sass.svg"
import viteIcon from "../../assets/technologiesIcons/Vite.svg"
import openweathermapIcon from "../../assets/technologiesIcons/openweathermapIcon.webp"

import background from "../../assets/projectsBackground.png"

import ProjectCard from "./components/projectCard";
import { useEffect, useRef, useState } from "react";



function ProjectsPage({setProjectsDisplayRef}){

    const [imgRef, setImgRef] = useState([]);
    const [originalAnimationProjectView, setOriginalAnimationProjectView] = useState(null);
    const projectsDisplayRef = useRef(null);

    function syncAnimation(ref, originalAnimation) {
        //asi me aseguro que se guarden bien los valores aunque se rendericen simultaneamente
        setImgRef(prevImgRef => {
            // Create a copy of the previous state array
            const newImgRef = [...prevImgRef];
            // Add the new ref to the array
            newImgRef.push(ref);
            // If originalAnimationProjectView is not set, update it
            if (!originalAnimationProjectView) {
                setOriginalAnimationProjectView(originalAnimation);
            }
            // Return the updated array
            return newImgRef;
        });
    }

    useEffect(() => {
        //para sincronizar las animaciones de las img de projects
        //console.log(imgRef);
        if(imgRef.length > 1){
            console.log("es mayor a 1");
            for (let index = 0; index < imgRef.length; index++) {  
                console.log(imgRef[index]);              
                imgRef[index].current.style.animation = "none";
                // el offsetwidth hace que se resetee la animacion supuestamente porque fuerza 
                // una recalculacion de estilos
                void imgRef[index].current.offsetWidth;
                // Para restaurar la animación a su valor original
                imgRef[index].current.style.animation = originalAnimationProjectView;
            }
        }
        
        
    }, [imgRef]);

    useEffect(() => {        
        setProjectsDisplayRef(projectsDisplayRef);
    }, []);
    

    return(
        <div className={styles.projects} ref={projectsDisplayRef}>            
                {/* <div className={styles.projectsBackground}>
                </div> */}
                <img  className={styles.projectsBackground} src={background} alt="background" />
                <div className={styles.projectsCardsContainer}>
                    <div className={styles.projectCard}>
                        <ProjectCard 
                            text="Juego de memoria en el que debemos salvar un hermoso slime. "
                            img={slimeSaviorProjectView}
                            linkTo="/slimeSavior"
                            altImg="Texto alternativo de la imagen"
                            technologies={[
                                {imageUrl: javaScriptIcon, name: "javaScript"},
                                {imageUrl: framerMotionIcon, name: "framer motion"},
                                {imageUrl: sassIcon, name: "sass"},
                                {imageUrl: viteIcon, name: "vite"}
                            ]}
                            syncAnimation = {syncAnimation}
                        />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard 
                            text="Web para consultar el clima y el pronóstico semanal."
                            img={weatherProjectView}
                            linkTo="/clima"
                            altImg="Texto alternativo de la imagen"
                            technologies={[
                                {imageUrl: javaScriptIcon, name: "javaScript"},
                                {imageUrl: framerMotionIcon, name: "framer motion"},
                                {imageUrl: sassIcon, name: "sass"},
                                {imageUrl: viteIcon, name: "vite"},
                                {imageUrl: reactChartjs2Icon, name: "react chartjs 2"},
                                {imageUrl: openweathermapIcon, name: "open weather map Api"},
                            ]}
                            syncAnimation = {syncAnimation}
                        />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard 
                            text="En construcción :)"
                            img={enConstruccionImg}
                            // linkTo="/clima"
                            altImg="Texto alternativo de la imagen"
                            //technologies={}
                            syncAnimation = {syncAnimation}
                        />
                    </div>
                    <div className={styles.projectCard}>
                        <ProjectCard 
                            text="En construcción :)"
                            img={enConstruccionImg}
                            //linkTo="/clima"
                            altImg="Texto alternativo de la imagen"
                            //technologies={}
                            syncAnimation = {syncAnimation}
                        />
                    </div>
                </div>                
                <img className={styles.alienSticker2} src={alienSticker2} alt="alienSticker" />
                <img className={styles.alienSticker5} src={alienSticker5} alt="alienSticker" />
                <img className={styles.alienSticker7} src={alienSticker7} alt="alienSticker" />
                <img className={styles.alienSticker8} src={alienSticker8} alt="alienSticker" />
                <img className={styles.alienSticker10} src={alienSticker10} alt="alienSticker" />
                <img className={styles.alienSticker12} src={alienSticker12} alt="alienSticker" />
                <img className={styles.alienSticker14} src={alienSticker14} alt="alienSticker" />
                <img className={styles.alienSticker17} src={alienSticker17} alt="alienSticker" />
                <img className={styles.alienSticker19} src={alienSticker19} alt="alienSticker" />
                <img className={styles.alienSticker20} src={alienSticker20} alt="alienSticker" />
                <img className={styles.alienSticker24} src={alienSticker24} alt="alienSticker" />
                <img className={styles.alienSticker28} src={alienSticker28} alt="alienSticker" />
                <img className={styles.alienSticker29} src={alienSticker29} alt="alienSticker" />            
        </div>
    )
}

export default ProjectsPage;