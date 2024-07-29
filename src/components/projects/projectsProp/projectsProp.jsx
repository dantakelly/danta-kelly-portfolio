"use client"

import Image from "next/image"
import projectsPropscss from "./projectsPropcss.css"
import Link from "next/link"

import gitLinkRound from "./assets/github-round-svgrepo-com.svg"



function ProjectProps(props) { 

    return(
        <>
              <div className="theProjects">
               <div className="theProject-IMG">
                <Image src={props.projectImage} className="theProject-IMG-actual"></Image>
                <a target="blank" href={props.projectLink}> <Image className="linkImg-project" src={gitLinkRound}></Image> </a>
               </div>
               <div className="theProject-content">
                <div className="project-H1AND-P">
                    <h1>{props.projectName}</h1>
                    <p>{props.projectDescription}</p>
                </div>
                <div className="project-toolsUsed">{props.projectTools}</div>
               </div>
              </div>
          </>
    )
}
export default ProjectProps