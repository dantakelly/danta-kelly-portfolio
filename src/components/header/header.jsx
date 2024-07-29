"use client"

import headercss from "./headercss.css"
import Image from "next/image"
import { useScrollContext } from "@/components/ScrollContext/ScrollContext";
import { useState } from "react";

import burgerOpen from "./assets/menu-hamburger-nav-svgrepo-com.svg"
import burgerClose from "./assets/close-remove-delete-cancel-svgrepo-com.svg"

function Header() { 
    const { aboutRef, projectsRef, contactRef } = useScrollContext();

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setShowNav(false); // Close the navigation after an item is clicked
    };

    // Responsive Header
    const [showNav, setShowNav] = useState(false)

    function toggleNav() { 
        setShowNav(!showNav)
    }

    return(
    <>
        <header>
            <div className="logo"><h1>DK</h1></div>
            <div className="tags">
                <ul>
                    <li><a>Home</a> </li>
                    <li><a onClick={() => scrollToSection(aboutRef)} className="About-Head">About</a></li>
                    <li><a onClick={() => scrollToSection(projectsRef)} className="Projects-head">Projects</a></li>
                    <button><a onClick={() => scrollToSection(contactRef)} className="Contact-Head">Contact</a></button>
                </ul>
            </div>
        </header>

        <div className="header20-mobile">
            <div onClick={toggleNav} className="closed-nav">
                <Image src={showNav ? burgerClose : burgerOpen} alt="Menu Icon" />
            </div>
            <div style={showNav ? {display: "block"} : {}} className="header20-content">
                <ul>
                    <li><a>Home</a> </li>
                    <li><a onClick={() => scrollToSection(aboutRef)} className="About-Head">About</a></li>
                    <li><a onClick={() => scrollToSection(projectsRef)} className="Projects-head">Projects</a></li>
                    <button><a onClick={() => scrollToSection(contactRef)} className="Contact-Head">Contact</a></button>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Header
