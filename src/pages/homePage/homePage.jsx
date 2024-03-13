import { useEffect, useRef, useState } from "react"
import Contactme from "./components/contactmePage/contactme"
import LandingPage from "./components/landingPage/landingPage"
import ProjectsPage from "./components/projectsPage/projectsPage"






export default function HomePage(){

    const[projectsPageRef, setProjectsPageRef] = useState(null);
    const[contactmeRef, setContactmeRef] = useState(null);
   

    // useEffect(()=>{
    //     console.log(projectsPageRef);
    //     console.log(contactmeRef);
    // },[projectsPageRef, contactmeRef]);

    return(
        <>
            <LandingPage
                projectsPageRef = {projectsPageRef}
                contactmeRef ={contactmeRef}
            />
            <ProjectsPage setProjectsPageRef = {setProjectsPageRef} />
            <Contactme setContactmeRef = {setContactmeRef} />            
        </>
    )
}
 