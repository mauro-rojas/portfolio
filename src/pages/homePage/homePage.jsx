import { useState } from "react"
import Contactme from "./components/contactme/contactme.jsx"
import Presentation from "./components/presentation/presentation.jsx"
import ProjectsDisplay from "./components/projectsDisplay/projectsDisplay.jsx"


export default function HomePage(){

    const[projectsDisplayRef, setProjectsDisplayRef] = useState(null);
    const[contactmeRef, setContactmeRef] = useState(null);

    return(
        <>
            <Presentation
                projectsDisplayRef = {projectsDisplayRef}
                contactmeRef ={contactmeRef}
            />
            <ProjectsDisplay setProjectsDisplayRef = {setProjectsDisplayRef} />
            <Contactme setContactmeRef = {setContactmeRef} />            
        </>
    )
}
 