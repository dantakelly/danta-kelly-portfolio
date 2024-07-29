"use client"

import footercss from "./footercss.css"
import Image from "next/image"
import Link from "next/link"
import { useScrollContext } from "@/components/ScrollContext/ScrollContext";

import githubIcon from "./assets/github-142-svgrepo-com.svg"
import instagramIcon from "./assets/instagram-svgrepo-com (1).svg"
import arrowFootIcon from "./assets/arrow foot.svg"

function Footer() { 
    const { contactRef } = useScrollContext();


    return(
        <>
        <footer>
            <div ref={contactRef} class="topPart-Footer">
                <div class="left-topPart">
                    <h3>Dantá Kelly</h3>
                    <p>
                        Code is like a canvas, and I'm the artist, painting digital dreams one pixel at a time.
                        <p class="contactInfo-footer">Contact: cultertraz@gmail.com <br/>
                          </p>
                          <p className="contactInfo-footer">
                          1876-493-8471
                          </p>
                    </p>
                    <div class="footerTop-socials">
                        <a href="https://github.com/dantakelly" target="_blank"> <Image src={githubIcon}></Image> </a>
                        <a href="https://www.instagram.com/cultertraz/" target="_blank"> <Image src={instagramIcon}></Image> </a>
                    </div>
                </div>
            </div>
            <div class="bottomPart-Footer">
                <div class="logo"><h1>DK</h1></div>
                <div class="copyright-footer">
                   <p>Dantá Kelly. All Rights Reserved</p>
                </div>
            </div>
         </footer>
        </>
    )
}
export default Footer