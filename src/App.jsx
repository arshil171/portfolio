import React, { useState } from "react";

import { BiDetail } from "react-icons/bi";
import { DiDjango, DiPostgresql } from "react-icons/di";
import {
  FaAngular,
  FaBootstrap,
  FaCode,
  FaFacebook,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedinIn,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
  FaRegEnvelope,
  FaSignal,
  FaSketch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { HiMiniPaintBrush } from "react-icons/hi2";
import {
  IoArrowBackSharp,
  IoBriefcaseOutline,
  IoColorPaletteSharp,
  IoHome,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import { MdSlideshow } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  
  const [activePortfolio, setActivePortfolio] = useState("MyWork");
  const [activeNavtab , setActiveNavTab] = useState("home")

  return (
    <div className=" w-[100vw] h-[100vh]">
      {/* navbar */}
           <nav className="nav fixed bottom-[2rem] left-[50%] w-[40rem] rounded-[5rem] z-[100] ">
                 <ul className="nav-list flex justify-evenly">
                   <li onClick={() => setActiveNavTab("home")} className={` relative flex text-[3rem] cursor-pointer active ${activeNavtab === "home"
                       ? " text-cyan-400" 
                       : ""
                     }`}>
                     <IoHome />
                    
                     <span className="tooltip absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                       Home
                     </span>
                   </li>
         
                   <li className={` relative flex text-[3rem] cursor-pointer active ${activeNavtab === "about"
                       ? " text-cyan-400 "
                       : ""
                     }`} onClick={() => setActiveNavTab("about")}>
                     <FaUser />
                     <span className="tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                       About
                     </span>
                   </li>
                   <li className={` relative flex text-[3rem] cursor-pointer active ${activeNavtab === "resume"
                       ? " text-cyan-400 "
                       : ""
                     }`} onClick={() => setActiveNavTab("resume")}>
                     <BiDetail />
                     <span className="tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                       Resume
                     </span>
                   </li>
                   <li className={` relative flex text-[3rem] cursor-pointer active ${activeNavtab === "portfolio"
                       ? " text-cyan-400 "
                       : ""
                     }`}onClick={() => setActiveNavTab("portfolio")}>
                     <IoBriefcaseOutline />
                     <span className="tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                       Portfolio
                     </span>
                   </li>
                   <li className={` relative flex text-[3rem] cursor-pointer active ${activeNavtab === "contact"
                       ? " text-cyan-400 "
                       : ""
                     }`} onClick={() => setActiveNavTab("contact")}>
                     <FaRegEnvelope />
                     <span className="tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]">
                       Contact
                     </span>
                   </li>
                 </ul>
               </nav>
       
      {/* <div className="container  "> */}
        {/* <div className="box"> */}
          {/* Home section  */}
          {activeNavtab === "home" && (
            <Home />
          )}
            {/* <Home /> */}
          {/* about section  */}

          {activeNavtab === "about" && 
            <About  />
          }
  
          {/* Resume section  */}
            {activeNavtab === "resume" && (
              <Resume/>
            )}
          

          {/* Portfolio Section  */}

          {activeNavtab === "portfolio" && (
            <Portfolio/>
          )}

          {/* Contact Section  */}
          {activeNavtab === "contact" && (
            <Contact/>
          )}
         
        </div>
    //   </div>
    // </div>
  );
};

export default App;
