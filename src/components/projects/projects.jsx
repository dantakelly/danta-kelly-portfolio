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
import SlowSleepImg from "./assets/Slow Sleep Records and 2 more pages - Personal - Microsoft​ Edge 9_25_2024 8_46_48 AM.png"
import myProfileImage from "./assets/myProfile - Personal - Microsoft​ Edge 2_18_2025 1_15_03 PM.png"
import BlogFusion from "./assets/Blog Fusion - Google Chrome 3_19_2025 7_55_22 PM.png"
import Euphoniczen from "./assets/Euphoniczen and 1 more page - Personal - Microsoft​ Edge 5_22_2025 9_56_26 AM.png"

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
                    projectImage = {Euphoniczen}
                    projectLink = "https://euphoniczen.com"
                    projectName = "Euphoniczen"
                    projectDescription = "Euphoniczen is a SaaS tool that helps music creators and industry professionals discover playlist curators by analyzing playlist descriptions, leveraging the full capabilities of Spotify’s advanced API."
                    projectTools = "#Next JS #CSS #Prisma #Postgre #Next Auth v5 #TypeScript"
                /> 

            <ProjectProps
                    projectImage = {BlogFusion}
                    projectLink = "https://blog-fusion-zeta.vercel.app"
                    projectName = "BlogFusion"
                    projectDescription = "BlogFusion is a dynamic web application that enables users to authenticate and create blogs on a variety of topics. Built with React, Next.js, Prisma, and PostgreSQL, it offers a seamless and efficient blogging experience."
                    projectTools = "#Next JS #CSS #Prisma #Postgre"
                /> 

            <ProjectProps
                    projectImage = {myProfileImage}
                    projectLink = "https://my-profile-client.vercel.app//"
                    projectName = "myProfile"
                    projectDescription = "myProfile is a versatile app for sharing your story effortlessly. Showcase your journey, skills, and passions with customizable profiles and interactive features, perfect for all who is looking to connect and express themselves."
                    projectTools = "#React #Next.js #CSS #postgresql #Prisma #Node.js"
                /> 

            <ProjectProps
                projectImage = {ElysiumProjectImage}
                projectLink = "https://elysium-page.vercel.app/"
                projectName = "Elysium"
                projectDescription = "Elysium is a web-based property listing platform designed to showcase properties for sale or rent. This capstone project aims to demonstrate proficiency in web development by creating a user-friendly interface for users to browse properties, view details, and contact property owners or agents."
                projectTools = "#React #Next.js #CSS #postgresql #Prisma"
            /> 

            <ProjectProps
                projectImage = {SlowSleepImg}
                projectLink = "https://slowsleeprecords.com"
                projectName = "Slow Sleep Records"
                projectDescription = "This is a record label website that showcases new releases & artist biography data. Authorized users have the ability to visit the dashboard & create different data values. This webiste is built using Next JS for the frontend & Node Express for the backend."
                projectTools = "#Next JS #Node/Express #CSS #Prisma #Postgre"
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