"use client"

import Header from "@/components/header/header"
import Intro from "@/components/introSection/intro"
import About from "@/components/about/about"
import Tools from "@/components/toolsUsed/tools"
import Projects from "@/components/projects/projects"
import Footer from "@/components/footer/footer"
import { ScrollProvider } from '@/components/ScrollContext/ScrollContext';

function Main() { 

    return(
        <>
    <ScrollProvider>
      <Header />
      <Intro />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </ScrollProvider>
        </>
    )
}
export default Main