"use client"

import introcss from "./introcss.css"
import Image from "next/image"

import githubIcon from "./assets/github-142-svgrepo-com.svg"
import instagramIcon from "./assets/instagram-svgrepo-com (1).svg"
import locationIcon from "./assets/location-svg.svg"
import dotIcon from "./assets/dotGreen-svg.svg"
import meIntro from "./assets/me -profile.jpg"


function Intro() { 

    return(
        <>
        {/* Intro Section */}
         <div id="first-div-cont">
            <div class="introduction-Me">
                <div class="mee">
                    <h1>Hi, I'm Dantá Kelly <span>👋</span> </h1>
                    <p>
                        With expertise in React.js and Node.js, I am a full-stack developer dedicated to designing and <br/> 
                        developing exceptional digital experiences. My focus is on creating fast, accessible, and <br/> 
                        visually stunning applications that are optimized for responsiveness, ensuring a superior user <br/> 
                        experience across all devices and platforms. <br/>
                    </p>
                </div>
                <div class="mee-locationANDDot">
                      <div class="location-init">
                      <Image src={locationIcon}></Image>
                        <p>Kingston, Jamaica</p>
                      </div>
                      {/* <h6 class="betwwenThelOCATIONandavil">||</h6> */}
                        <div class="availableinit">
                            <Image src={dotIcon}></Image>
                            <p>Available for new projects</p>
                        </div>
                    </div>
                    <div class="mysocialsIn-cont1">
                       <a href="https://github.com/dantakelly" target="_blank"> <Image src={githubIcon}></Image> </a>
                       <a href="https://www.instagram.com/cultertraz/" target="_blank"> <Image src={instagramIcon}></Image> </a>
                    </div>
                </div>

                <div class="myIMG-firstcont">
                    <Image src={meIntro} class="the-IMG-firstCont"></Image>
                </div>
            </div>
         {/* Intro Section closed */}
        </>
    )
}
export default Intro