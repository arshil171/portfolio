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

const App = () => {
  
  const [activePortfolio, setActivePortfolio] = useState("MyWork");
  const [activeNavtab , setActiveNavTab] = useState("Home")

  return (
    <div className=" w-[100vw] h-[100vh]">
      {/* navbar */}
      <Navbar/>
       
      <div className="container  ">
        <div className="box">
          {/* Home section  */}
          

          {/* about section  */}

         

          {/* Resume section  */}

          

          {/* Portfolio Section  */}

        

          {/* Contact Section  */}

         
        </div>
      </div>
    </div>
  );
};

export default App;
