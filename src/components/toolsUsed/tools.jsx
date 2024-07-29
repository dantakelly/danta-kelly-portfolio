"use client"

import toolscss from "./toolscss.css"
import Image from "next/image"

import cssIcon from "./assets/css-3-svgrepo-com.svg"
import gitIcon from "./assets/git-svgrepo-com.svg"
import htmlIcon from "./assets/html-svgrepo-com.svg"
import jsIcon from "./assets/javascript-svgrepo-com.svg"
import jqueryIcon from "./assets/jquery-svgrepo-com.svg"
import prismaIcon from "./assets/light-prisma-svgrepo-com.svg"
import nextIcon from "./assets/next-js-svgrepo-com.svg"
import nodeIcon from "./assets/node-js-svgrepo-com.svg"
import pgIcon from "./assets/postgresql-svgrepo-com.svg"
import reactIcon from "./assets/react-svgrepo-com.svg"
import socketIcon from "./assets/socket-io-svgrepo-com.svg"
import tailwindIcon from "./assets/tailwind-svgrepo-com.svg"

function Tools() { 

    return(
        <>
        {/* All Tools */}
           <div class="thirdContainer-mySkillSet">
            <div class="theSkillsection-secondContainer">
            <div class="theTitleSkill">
                <div class="titleOnlySkills">Skills</div>
                <p>My daily toolkit as a full-stack web developer</p>
            </div>
            
            <div class="alltheTools-Items">
                <div class="theTools-toolsSection">
                    <Image src={jsIcon}></Image>
                    <p>Javascript</p>
                </div>
                <div class="theTools-toolsSection">
                   <Image src={reactIcon}></Image>
                    <p>React</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={nextIcon}></Image>
                    <p>Next JS</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={nodeIcon}></Image>
                    <p>Node</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={socketIcon}></Image>
                    <p>Socket.io</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={pgIcon}></Image>
                    <p>PostgreSQL</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={tailwindIcon}></Image>
                    <p>Tailwindcss</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={gitIcon}></Image>
                    <p>Git</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={prismaIcon}></Image>
                    <p>Prisma</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={htmlIcon}></Image>
                    <p>HTML</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={cssIcon}></Image>
                    <p>CSS</p>
                </div>
                <div class="theTools-toolsSection">
                    <Image src={jqueryIcon}></Image>
                    <p>Jquery</p>
                </div>
            </div>
          </div>
        </div>
          {/* All tools */}
        </>
    )
}
export default Tools