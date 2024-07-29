"use client"

import aboutcss from "./aboutcss.css"
import Image from "next/image"
import { useScrollContext } from "@/components/ScrollContext/ScrollContext";

import aboutMeIMGIcon from "./assets/me -profile 2.jpeg"

function About() { 
    const { aboutRef } = useScrollContext();

    return(
        <>
        {/* About Me Section */}
          <div ref={aboutRef} class="secondContainer-aboutMe">
            <div class="aboutMe-text">
                <p>About me</p>
            </div>
            <div class="contents-for-aboutMe">
                <div class="myImg-about">
                    <Image src={aboutMeIMGIcon}></Image>
                </div>
                <div class="actualContents-aboutMe">
                    <div class="title-actual-content-aboutMe">
                        <h2>Learn More About Me</h2>
                        <div class="textContents-about">
                            <p>
                                Hello! I'm Dantá Kelly, a passionate and driven full-stack web developer based in Jamaica. My 
                                journey in coding began in 2023, when I took the first step towards turning my interest into a 
                                career. With dedication and perseverance, I taught myself how to code through online courses 
                                and self-study.
                            </p>
                            <p>
                                Through trial and error, I honed my skills and continued to push beyond my limits. My passion
                                for web development grows stronger with each project I complete, and I'm excited to bring
                                my skills and creativity to help clients achieve their online goals.
                            </p>
                            <p>
                                With a strong foundation in both front-end and back-end development, I'm proficient in a
                                range of programming languages and technologies. I'm committed to staying up-to-date with
                                industry trends and best practices, ensuring that my skills remain current and in-demand.
                            </p>
                            <h3>Key Strengths:</h3>
                            <ul class="keysStrengths-UL-about">
                                <li>Full-stack web development (front-end and back-end)</li>
                                <li>Proficient in HTML, CSS, JavaScript, React, Node.js, etc.</li>
                                <li>Passionate about delivering high-quality, user-friendly solutions</li>
                                <li>Adaptability and continuous learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        {/* About Me Section -- Closed */}
        </>
    )
}
export default About