"use client"

import Image from "next/image"
import ProjectProps from "./projectsProp/projectsProp"
import projectsPropscss from "./projectsProp/projectsPropcss.css"
import { useScrollContext } from "@/components/ScrollContext/ScrollContext";


import ElysiumProjectImage from "./assets/Elysium project image.png"
import safeKeyProjectImage from "./assets/safe key - project img.png"
import noteappProjectImage from "./assets/note-app project image.png"
import socialFlowProjectImage from "./assets/socialFlow - project Image.png"
import TerraverdeImage from "./assets/Terraverde - Google Chrome 8_7_2024 12_47_30 AM.png"

function Projects() { 
    const { projectsRef } = useScrollContext();

    return(
        <>
        <div ref={projectsRef} className="project-container">

            <div className="intro-to-project">
            <p className="projectTitle-head">Projects</p>
                <p className="projectpIntro">
                    Following projects showcases my skills and experience through real-world examples of <br/>
                    my work. Each project is briefly described with links to code repositories and live demos in <br/> 
                    it. It reflects my ability to solve complex problems, work with different technologies, and <br/> 
                    manage projects effectively.
                </p>
            </div> 

        {/* All project props being passed */}
        <div id="the-project-container">

            <ProjectProps
                projectImage = {ElysiumProjectImage}
                projectLink = "https://elysium-page.vercel.app/"
                projectName = "Elysium"
                projectDescription = "Elysium is a web-based property listing platform designed to showcase properties for sale or rent. This capstone project aims to demonstrate proficiency in web development by creating a user-friendly interface for users to browse properties, view details, and contact property owners or agents."
                projectTools = "#React #Next.js #CSS #postgresql #Prisma"
            /> 

            <ProjectProps
                projectImage = {TerraverdeImage}
                projectLink = "https://terraverde-dusky.vercel.app/"
                projectName = "Terraverde"
                projectDescription = "Terraverde is an innovative project that leverages the Pexels API to offer a stunning visual journey across the globe. This platform enables users to explore and discover the beauty of various countries, cities, and states worldwide through a curated collection of high-quality images."
                projectTools = "#Next JS #CSS"
            /> 

            <ProjectProps
                projectImage = {socialFlowProjectImage}
                projectLink = "https://social-flow.vercel.app/"
                projectName = "socialFlow"
                projectDescription = "SocialFlow is a versatile chat application designed to facilitate effortless communication among individuals. This intuitive platform enables users to engage in real-time conversations, fostering connections and community building."
                projectTools = "#React #Next.js #postgresql #Prisma #CSS #Socket #Node.js"
            /> 
           
            <ProjectProps
                projectImage = {safeKeyProjectImage}
                projectLink = "https://safe-key-snowy.vercel.app/"
                projectName = "safeKey"
                projectDescription = "safeKey is a password management application designed to assist individuals in creating and storing complex passwords. Developed using Vanhalla HTML, CSS, and JS, this application provides a secure and user-friendly platform for password management."
                projectTools = "#HTML #CSS #Javascript"
            /> 

            <ProjectProps
                projectImage = {noteappProjectImage}
                projectLink = "https://note-app-silk-psi.vercel.app/"
                projectName = "Note-App"
                projectDescription = "This app is a lightweight note-taking application that enables users to jot down and store notes locally on their device. Built using React, this straightforward app prioritizes ease of use and efficiency."
                projectTools = "#React #CSS"
            /> 

           </div>
        {/* project props || passed closed */}

        </div>
        </>
    )
}
export default Projects